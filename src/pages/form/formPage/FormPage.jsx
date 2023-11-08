import styles from "./FormPage.module.css";
import filter from "../../../assets/images/filter.svg";
import search from "../../../assets/images/search.svg";
import users from "../../../userData/users.json";
import { useState, useMemo, useRef, useEffect } from "react";
import Users from "../usersList/UsersList";
import Header from "../../../layout/header/Header";
import Pagination from "../../../library/pagination/Pagination";
import CheckBox from "../../../components/checkbox/CheckBox";
import { UseForm } from "../../../context/useFormContext";

export default function FormPage() {
  // declare states
  const usersObject = users;
  const currentCount = 1;
  const cardsCount = 10;

  const [currentPage, setCurrentPage] = useState(currentCount);
  const [cardPerPage] = useState(cardsCount);
  const [searchField, setSearchField] = useState("");
  const filterRef = useRef(null);
  const checkBoxRef = useRef(null);

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

  // pagination changes
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  function firstElement() {
    setCurrentPage(currentCount);
  }
  function lastElement() {
    setCurrentPage(cardsCount);
  }

  // detect clicking outside of filter body

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

  // filtering function

  const filterUsers = () => {
    const usersByStatus = usersObject.filter((item) => {
      if (item.status === "active" && activeChecked) {
        return item;
      }
      if (item.status === "inactive" && inactiveChecked) {
        return item;
      }
    });

    const userByGender = usersByStatus.filter((item) => {
      if (item.gender === "Female" && femaleChecked) {
        return item;
      }
      if (item.gender === "Male" && maleChecked) {
        return item;
      }
    });

    const usersByString = userByGender.filter((item) => {
      if (
        item.full_name.toLowerCase().includes(searchField) ||
        item.mail.toLowerCase().includes(searchField)
      ) {
        return true;
      }
      return false;
    });

    return usersByString;
  };

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
          <label htmlFor="search" className={styles.label}>
            <input
              id="search"
              className={styles.search}
              type="text"
              onChange={(e) => setSearchField(e.target.value)}
              spellCheck="false"
              autoComplete="off"
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
