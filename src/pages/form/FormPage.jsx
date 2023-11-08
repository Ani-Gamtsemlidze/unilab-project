import styles from "./FormPage.module.css";

import filter from "../../assets/images/filter.svg";
import search from "../../assets/images/search.svg";

import users from "../../userData/users.json";

import { useState, useMemo, useRef, useEffect } from "react";
import Users from "./usersList/UsersList";
import Header from "../../layout/header/Header";
import Pagination from "../../library/pagination/Pagination";
import CheckBox from "../../components/checkbox/CheckBox";
import { UseForm } from "../../context/useFormContext";
import { filterUsers } from "../../components/filter/FilterUsers";

export default function FormPage() {
  const usersObject = users;
  const currentCount = 1;
  const cardsCount = 10;
  const [currentPage, setCurrentPage] = useState(currentCount);
  const [cardPerPage] = useState(cardsCount);
  const [searchField, setSearchField] = useState("");

  const indexOfLastCard = currentPage * cardPerPage;
  const indexOfFirstCard = indexOfLastCard - cardPerPage;

  const {
    activeChecked,
    inactiveChecked,
    femaleChecked,
    maleChecked,
    handleFilterActive,
    setIsFilterActive,
    isFilterActive,
  } = UseForm();

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  function firstElement() {
    setCurrentPage(currentCount);
  }
  function lastElement() {
    setCurrentPage(cardsCount);
  }

  const filterRef = useRef(null);
  const checkBoxRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (
        isFilterActive &&
        filterRef.current &&
        !filterRef.current.contains(e.target) &&
        checkBoxRef.current &&
        !checkBoxRef.current.contains(e.target)
      ) {
        setIsFilterActive(false);
      }
    }

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isFilterActive, filterRef]);

  const filterResult = useMemo(() => {
    setCurrentPage(1);
    return filterUsers(
      usersObject,
      activeChecked,
      inactiveChecked,
      femaleChecked,
      maleChecked,
      searchField
    );
  }, [activeChecked, inactiveChecked, femaleChecked, maleChecked, searchField]);
  const forUser = filterResult.slice(indexOfFirstCard, indexOfLastCard);
  return (
    <>
      <Header />
      <main className={styles.main}>
        <section className={styles.section}>
          <div>
            <div
              ref={filterRef}
              onClick={handleFilterActive}
              className={styles.filter}
            >
              <img src={filter} />
              <p>filter</p>
            </div>
          </div>
          <label className={styles.label}>
            <input
              placeholder="search"
              className={styles.search}
              type="text"
              onChange={(e) => setSearchField(e.target.value)}
            />
            <img src={search} />
          </label>
        </section>
        <CheckBox ref={checkBoxRef} />
        {filterResult.length ? (
          <Users usersList={forUser} />
        ) : (
          <p style={{ color: "#fff", fontSize: "26px" }}>No Items Found</p>
        )}
      </main>
      <Pagination
        total={Math.round(filterResult.length / cardsCount)}
        setCurrentPage={handlePageChange}
        currentPage={currentPage}
        lastElement={lastElement}
        firstElement={firstElement}
        filterResult={filterResult}
      />
    </>
  );
}
