// import { useEffect, useRef, useState } from "react";
// import { Link, useParams } from "react-router-dom";
// import {useMemo} "react"
import styles from "./FormPage.module.css";

import filter from "../../assets/images/filter.svg";
import search from "../../assets/images/search.svg";
import chevron from "../../assets/images/chevron-right.svg";

import users from "../../userData/users.json";

import { useEffect, useState, useMemo } from "react";
import Users from "./users/Users";
import Header from "../../layout/header/Header";
import Pagination from "../../library/pagination/Pagination";

export default function FormPage() {
  const usersObject = users;
  const currentCount = 1;
  const cardsCount = 10;
  const [currentPage, setCurrentPage] = useState(currentCount);
  const [cardPerPage, setCardPerPage] = useState(cardsCount);
  const [searchField, setSearchField] = useState("");
  const [isFilterActive, setIsFilterActive] = useState(false);
  const indexOfLastCard = currentPage * cardPerPage;
  const indexOfFirstCard = indexOfLastCard - cardPerPage;
  let currentUsers = users.slice(indexOfFirstCard, indexOfLastCard);

  /////////////
  const [checkBox, setCheckBox] = useState();

  const [displayCategory, setDisplayCategory] = useState("active");

  const [activeChecked, setActiveChecked] = useState(true);
  const [inactiveChecked, setInactiveChecked] = useState(true);
  const [femaleChecked, setFemaleChecked] = useState(true);
  const [maleChecked, setMaleChecked] = useState(true);

  const [isGender, setIsGender] = useState(false);
  const [isStatus, setIsStatus] = useState(true);

  const toggleActive = () => {
    setActiveChecked(!activeChecked);
  };

  const toggleInactive = () => {
    setInactiveChecked(!inactiveChecked);
  };

  const toggleFemale = () => {
    setFemaleChecked(!femaleChecked);
  };
  const toggleInactiveGender = () => {
    setMaleChecked(!maleChecked);
  };

  const filteredUsers = currentUsers.filter((user) => {
    if (activeChecked && user.status === "active") {
      return true;
    }
    if (inactiveChecked && user.status === "inactive") {
      return true;
    }
    return false;
  });

  useEffect(() => {
    console.log(filteredUsers, currentUsers);
    filterData(filteredUsers);
    // console.log(filteredUsers);
  }, [filteredUsers]);

  function handleGender() {
    setIsGender(!isGender);
  }
  function handleStatus() {
    setIsStatus(!isStatus);
  }

  //////////

  // const [cards, setCards] = useState([]);

  // console.log(users);
  const total = currentUsers.length;
  const [isActive, setIsActive] = useState(false);

  const handlePageChange = (newPage) => {
    // console.log(newPage);
    setCurrentPage(newPage);
  };

  function firstElement() {
    setCurrentPage(currentCount);
    // setIsActive(true);
  }
  function lastElement() {
    setCurrentPage(cardsCount);
  }

  function handleFilterActive() {
    setIsFilterActive(!isFilterActive);
  }

  const filterData = (test) => {
    console.log(test);
    // currentUsers = test;
  };

  const filterUsers = useMemo(() => {
    setCurrentPage(1);
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
        item.full_name.toLocaleLowerCase().includes(searchField) ||
        item.mail.toLocaleLowerCase().includes(searchField)
      ) {
        return true;
      }
      return false;
    });

    return usersByString;
  }, [activeChecked, inactiveChecked, femaleChecked, maleChecked, searchField]);
  const forUser = filterUsers.slice(indexOfFirstCard, indexOfLastCard);
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

            {isFilterActive ? (
              <div
                style={{
                  position: "absolute",
                  backgroundColor: "#fff",
                  width: "240px",
                  height: "280px",
                  left: "23px",
                  borderRadius: "21px",
                  padding: "0 20px",
                }}
              >
                <div
                  onClick={handleStatus}
                  style={{
                    display: "flex",
                    cursor: "pointer",
                    margin: "20px 0",
                  }}
                >
                  <img style={{ marginRight: "8px" }} src={chevron} />
                  <p>სტუდენტის სტატუსი</p>
                </div>
                {isStatus ? (
                  <div>
                    <label className="container">
                      ACTIVE
                      <input
                        type="checkbox"
                        // checked="checked"
                        checked={activeChecked}
                        onChange={toggleActive}
                      />
                      <span className="checkmark"></span>
                    </label>
                    <label className="container">
                      INACTIVE
                      <input
                        type="checkbox"
                        // checked="checked"
                        checked={inactiveChecked}
                        onChange={toggleInactive}
                      />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                ) : (
                  ""
                )}
                <div
                  onClick={handleGender}
                  style={{
                    display: "flex",
                    cursor: "pointer",
                    width: "55px",
                    margin: "20px 0",
                  }}
                >
                  <img style={{ marginRight: "8px" }} src={chevron} />
                  <p>სქესი</p>
                </div>
                {isGender ? (
                  <>
                    <label className="container">
                      MALE
                      <input
                        type="checkbox"
                        // checked="checked"
                        checked={femaleChecked}
                        onChange={toggleFemale}
                      />
                      <span className="checkmark"></span>
                    </label>
                    <label className="container">
                      FEMALE
                      <input
                        type="checkbox"
                        // checked="checked"
                        checked={maleChecked}
                        onChange={toggleInactiveGender}
                      />
                      <span className="checkmark"></span>
                    </label>
                  </>
                ) : (
                  ""
                )}
              </div>
            ) : (
              ""
            )}
          </div>
          <label>
            <input
              onChange={(e) => setSearchField(e.target.value)}
              // onClick={handleSearch}
              className={styles.search}
            />
            <img src={search} />
          </label>
        </section>
        {/* <section className={styles.users}> */}
        <Users
          // filterData={filterData}
          usersList={forUser}
          // isFilterActive={isFilterActive}
        />

        {/* </section> */}
      </main>
      <Pagination
        total={Math.round(filterUsers.length / cardsCount)}
        isActive={isActive}
        setCurrentPage={handlePageChange}
        currentPage={currentPage}
        lastElement={lastElement}
        firstElement={firstElement}
      />
    </>
  );
}
