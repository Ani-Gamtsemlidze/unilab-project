import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./UserCards.module.css";
import { useParams } from "react-router-dom";
import Cards from "./Cards";
import Header from "../../layout/header/Header";
import Pagination from "../../library/pagination/Pagination";

function UserCards() {
  const currentCount = 1;
  const cardsCount = 10;
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(currentCount);
  const [cardPerPage] = useState(cardsCount);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const fetchUserData = async () => {
    try {
      const res = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
      setCards(res.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const indexOfLastCard = currentPage * cardPerPage;
  const indexOfFirstCard = indexOfLastCard - cardPerPage;
  const currentCards = cards.slice(indexOfFirstCard, indexOfLastCard);

  function lastElement() {
    setCurrentPage(cardsCount);
  }

  function firstElement() {
    setCurrentPage(currentCount);
  }

  return (
    <>
      <Header currentPage={currentPage} setCurrentPage={handlePageChange} />
      <main className={styles.main}>
        {loading ? <p>Loading...</p> : <Cards cards={currentCards} />}
      </main>
      <Pagination
        total={cards.length / cardsCount}
        cardPerPage={cardPerPage}
        currentPage={currentPage}
        setCurrentPage={handlePageChange}
        lastElement={lastElement}
        firstElement={firstElement}
      />
    </>
  );
}

export default UserCards;
