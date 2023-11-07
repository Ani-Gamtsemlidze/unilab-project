import styles from "./Cards.module.css";

export default function Cards({ cards }) {
  return (
    <>
      {cards.map((card) => (
        <div className={styles.card} key={card.id}>
          <div className={styles.userId}>
            <p>{card.userId}</p>
          </div>
          <div className={styles.title}>
            <h2>{card.title}</h2>
          </div>
          <div className={styles.body}>
            <p>{card.body}</p>
          </div>
          <div className={styles.id}>
            <span>User ID: {card.id}</span>
          </div>
        </div>
      ))}{" "}
    </>
  );
}
