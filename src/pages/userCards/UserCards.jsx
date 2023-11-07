import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./UserCards.module.css";
import { useParams } from "react-router-dom";
// import leftArrow from "../../assets/images/chevrons-left.png";
// import Pagination from "../../library/pagination/Pagination";
import Cards from "./Cards";
import Header from "../../layout/header/Header";
import Pagination from "../../library/pagination/Pagination";
// import Pagination from "../../library/pagination/Pagination";

function UserCards() {
  const currentCount = 1;
  const cardsCount = 12;
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(currentCount);
  const [cardPerPage, setCardPerPage] = useState(cardsCount);

  const { id } = useParams();

  // აქ იცვლება გვერდები

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    console.log(newPage);
  };

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(false);
      try {
        const res = await axios.get(
          `https://jsonplaceholder.typicode.com/posts`
        );
        setCards(res.data);
        setLoading(true);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchUsers();
  }, []);

  const indexOfLastCard = currentPage * cardPerPage;
  const indexOfFirstCard = indexOfLastCard - cardPerPage;
  const currentCards = cards.slice(indexOfFirstCard, indexOfLastCard);
  const total = currentCards.length;

  function lastElement() {
    setCurrentPage(currentCount);
  }
  function firstElement() {
    setCurrentPage(cardsCount);
  }
  return (
    <>
      <Header currentPage={currentPage} setCurrentPage={handlePageChange} />
      <main className={styles.main}>
        <Cards cards={currentCards} loading={loading} />
      </main>
      <Pagination
        total={Math.round(cards.length / cardsCount)}
        cardPerPage={cardPerPage}
        currentPage={currentPage} // Pass the currentPage as a prop
        setCurrentPage={handlePageChange} // Pass the page change handler
        lastElement={lastElement}
        firstElement={firstElement}
      />
    </>
  );
}

export default UserCards;
