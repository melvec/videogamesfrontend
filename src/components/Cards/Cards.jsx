import React, { useState } from "react";
import Card from "../Card/Card";
import styles from "./Cards.module.css";

export default function DisplayCards(props) {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 15;

  // Calculate the total number of pages based on the number of games
  const totalPages = Math.ceil(props.games.length / cardsPerPage);

  // Calculate the index range for the current page
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = props.games.slice(indexOfFirstCard, indexOfLastCard);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.items}>
        {currentCards.map((game) => (
          <div className={styles.card} key={game.id}>
            <Card
              key={game.id}
              id={game.id}
              name={game.name}
              image={game.image}
            />
          </div>
        ))}
      </div>
      <div>
        <button onClick={prevPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span>
          {" "}
          Page {currentPage} of {totalPages}{" "}
        </span>
        <button onClick={nextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
}
