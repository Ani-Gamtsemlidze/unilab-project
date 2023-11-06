import { Link } from "react-router-dom";
import documentImage from "../../assets/images/document.png";

import styles from "./LandingPage.module.css";

export default function LandingPage() {
  return (
    <main className={styles.landingContainer}>
      <div className={styles.imageContainer}>
        <img alt="Documentation Image" src={documentImage} />
      </div>
      <div className={styles.titleContainer}>
        <h1>Get Started Today</h1>
      </div>
      <Link to="/login" className={styles.landing_button}>
        Get Started
      </Link>
    </main>
  );
}
