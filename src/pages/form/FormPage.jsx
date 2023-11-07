import styles from "./FormPage.module.css";

import filter from "../../assets/images/filter.svg";
import search from "../../assets/images/search.svg";

import users from "../../userData/users.json";

import { useState, useMemo } from "react";
import Users from "./users/Users";
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

  const [isActive, setIsActive] = useState(false);

  const {
    activeChecked,
    inactiveChecked,
    femaleChecked,
    maleChecked,
    handleFilterActive,
  } = UseForm();

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  function firstElement() {
    setCurrentPage(currentCount);
    // setIsActive(true);
  }
  function lastElement() {
    setCurrentPage(cardsCount);
  }

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
            <div onClick={handleFilterActive} className={styles.filter}>
              <img src={filter} />
              <p>filter</p>
            </div>
          </div>
          <label>
            <input
              onChange={(e) => setSearchField(e.target.value)}
              className={styles.search}
            />
            <img src={search} />
          </label>
        </section>
        <CheckBox />
        <Users usersList={forUser} />
      </main>
      <Pagination
        total={Math.round(filterResult.length / cardsCount)}
        isActive={isActive}
        setCurrentPage={handlePageChange}
        currentPage={currentPage}
        lastElement={lastElement}
        firstElement={firstElement}
      />
    </>
  );
}
