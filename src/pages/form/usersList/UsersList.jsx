import React from "react";
import styles from "./UsersList.module.css";

export default function UsersList({ usersList }) {
  return (
    <div className={styles.listSection}>
      <section className={styles.categories}>
        <ul className={styles.categoriesList}>
          <li className={styles.name}>სტუდენტის სახელი და გვარი</li>
          <li>სტატუსი</li>
          <li>სქესი</li>
          <li>ქულები</li>
          <li>პირადი ნომერი</li>
          <li>მაილი</li>
          <li>მობილურის ნომერი</li>
          <li>მისამართი</li>
          <li>დაბადების თარიღი</li>
        </ul>
      </section>
      <section className={styles.userList}>
        {usersList.map((item) => (
          <ul key={item.id_number} className={styles.item}>
            <li>{item.full_name}</li>
            <li>{item.status}</li>
            <li>{item.gender}</li>
            <li>{item.points}</li>
            <li>{item.id_number}</li>
            <li>{item.mail}</li>
            <li>{item.mobile_numbers}</li>
            <li>{item.address}</li>
            <li>{item.birth_day}</li>
          </ul>
        ))}
      </section>
    </div>
  );
}
