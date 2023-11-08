import styles from "./CardsList.module.css";

export default function CardsList({ cards }) {
  return (
    <>
      {cards.map((card) => (
        <div key={card.id} className={styles.card}>
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
