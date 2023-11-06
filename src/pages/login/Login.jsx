import Authentication from "./authentication/Authentication";
import styles from "./Login.module.css";

export default function Login() {
  return (
    <div className={styles.loginContainer}>
      <main className={styles.main}>
        <div className={styles.loginHeading}>
          <h1>Get Started</h1>
        </div>
        <p className={styles.description}>add photo</p>
        <Authentication />
      </main>
    </div>
  );
}
