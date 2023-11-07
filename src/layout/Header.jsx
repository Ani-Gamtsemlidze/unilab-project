import { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styles from "./Header.module.css";

export default function Header() {
  const [popUpMessage, setPopUpMessage] = useState(false);
  const userImage = localStorage.getItem("userImage");
  const userName = localStorage.getItem("userName");

  const popUpRef = useRef(null);
  const userImageRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (
        popUpMessage &&
        popUpRef.current &&
        !popUpRef.current.contains(e.target) &&
        userImageRef.current &&
        !userImageRef.current.contains(e.target)
      ) {
        setPopUpMessage(false);
      }
    }

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [popUpMessage]);

  function handlePopUpMessage() {
    setPopUpMessage(!popUpMessage);
  }

  function handleStorageClean() {
    localStorage.removeItem("userImage");
    localStorage.removeItem("userName");
  }

  return (
    <header className={styles.header}>
      <nav className={styles.navBar}>
        <ul>
          <li>
            {" "}
            <Link className={styles.formLink} to="/form">
              Form
            </Link>
          </li>
          <li>
            {" "}
            <Link className={styles.cardLink} to="/cards">
              User Cards
            </Link>
          </li>
        </ul>
      </nav>
      <div className={styles.user}>
        <div className={styles.userName}>
          <span>{userName}</span>
        </div>
        <img ref={userImageRef} onClick={handlePopUpMessage} src={userImage} />
        {popUpMessage ? (
          <div className={styles.pop_up} ref={popUpRef}>
            <div>
              <p className={styles.question}>
                {userName}, <br /> do you want to leave the page?
              </p>
            </div>
            <div>
              <button
                className={styles.cancelButton}
                onClick={() => setPopUpMessage(false)}
              >
                Cancel
              </button>
              <Link
                className={styles.logout}
                to="/"
                onClick={handleStorageClean}
              >
                log out
              </Link>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}
