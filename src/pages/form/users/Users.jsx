import React, { useEffect } from "react";
import styles from "./Users.module.css";
import chevron from "../../../assets/images/chevron-right.svg";
import { useState } from "react";

export default function Users({ usersList }) {
  // const [checkBox, setCheckBox] = useState();

  // const [displayCategory, setDisplayCategory] = useState("active");

  // const [activeChecked, setActiveChecked] = useState(true);
  // const [inactiveChecked, setInactiveChecked] = useState(true);

  // const [isGender, setIsGender] = useState(false);
  // const [isStatus, setIsStatus] = useState(true);

  // const toggleActive = () => {
  //   setActiveChecked(!activeChecked);
  // };

  // const toggleInactive = () => {
  //   setInactiveChecked(!inactiveChecked);
  // };

  // const filteredUsers = currentUsers.filter((user) => {
  //   if (activeChecked && user.status === "active") {
  //     return true;
  //   }
  //   if (inactiveChecked && user.status === "inactive") {
  //     return true;
  //   }
  //   return false;
  // });

  // useEffect(() => {
  //   console.log(filteredUsers, currentUsers);
  //   filterData(filteredUsers);
  //   // console.log(filteredUsers);
  // }, [filteredUsers]);

  // function handleGender() {
  //   setIsGender(!isGender);
  // }
  // function handleStatus() {
  //   setIsStatus(!isStatus);
  // }

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
        {usersList.map((item) => (
          <ul key={item.id_number} className={styles.item}>
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
    </section>
  );
}
