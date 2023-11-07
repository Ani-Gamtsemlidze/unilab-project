import React, { useEffect } from "react";
import styles from "./Users.module.css";
import chevron from "../../../assets/images/chevron-right.svg";
import { useState } from "react";

export default function Users({ currentUsers, isFilterActive, filterData }) {
  const [checkBox, setCheckBox] = useState();

  const [displayCategory, setDisplayCategory] = useState("active");

  const [activeChecked, setActiveChecked] = useState(true);
  const [inactiveChecked, setInactiveChecked] = useState(true);

  const [isGender, setIsGender] = useState(false);
  const [isStatus, setIsStatus] = useState(true);

  const toggleActive = () => {
    setActiveChecked(!activeChecked);
  };

  const toggleInactive = () => {
    setInactiveChecked(!inactiveChecked);
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
  // const handleChange = (event) => {
  //   if (event.target.checked) {
  //     setDisplayCategory("active");
  //     console.log("✅ Checkbox is checked");
  //   } else {
  //     setDisplayCategory("");
  //     console.log("⛔️ Checkbox is NOT checked");
  //   }
  // };

  function handleGender() {
    setIsGender(!isGender);
  }
  function handleStatus() {
    setIsStatus(!isStatus);
  }

  return (
    <section className={styles.table}>
      <div style={{ display: "flex" }} className={styles.categories}>
        <ul>
          <li>სტუდენტის სახელი და გვარი</li>
          <li>სტატუსი</li>
          <li>სქესი</li>
          <li>ქულები</li>
          <li>პირადი ნომერი</li>
          <li>მაილი</li>
          <li>მობილურის ნომერი</li>
          <li>მისამართი</li>
          <li>დაბადების თარიღი</li>
        </ul>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {filteredUsers.map((item) => (
          <ul className={styles.item}>
            <li>{item.full_name}</li>
            <li>{item.status}</li>
            <li>{item.gender}</li>
            <li>{item.points}</li>
            <li>{item.id_number}</li>
            <div>
              <li>{item.mail}</li>
            </div>
            <li>{item.mobile_numbers}</li>
            <li>{item.address}</li>
            <li>{item.birth_day}</li>
          </ul>
        ))}
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
            style={{ display: "flex", cursor: "pointer", margin: "20px 0" }}
          >
            <img style={{ marginRight: "8px" }} src={chevron} />
            <p>სტუდენტის სტატუსი</p>
          </div>
          {isStatus ? (
            <div>
              <label class="container">
                ACTIVE
                <input
                  type="checkbox"
                  // checked="checked"
                  checked={activeChecked}
                  onChange={toggleActive}
                />
                <span class="checkmark"></span>
              </label>
              <label class="container">
                INACTIVE
                <input
                  type="checkbox"
                  // checked="checked"
                  checked={inactiveChecked}
                  onChange={toggleInactive}
                />
                <span class="checkmark"></span>
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
              <label class="container">
                MALE
                <input
                  type="checkbox"
                  // checked="checked"
                  checked={activeChecked}
                  onChange={toggleActive}
                />
                <span class="checkmark"></span>
              </label>
              <label class="container">
                FEMALE
                <input
                  type="checkbox"
                  // checked="checked"
                  checked={inactiveChecked}
                  onChange={toggleInactive}
                />
                <span class="checkmark"></span>
              </label>
            </>
          ) : (
            ""
          )}
        </div>
      ) : (
        ""
      )}
    </section>
  );
}
