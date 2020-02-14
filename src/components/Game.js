import React, { useState } from "react";
import { calculateWinner } from "./../helpers";
import Board from "./Board";

const styles = {
  width: "200px",
  margin: "20px auto"
};
const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calculateWinner(history[stepNumber]);

  const handleClick = i => {
    const timeInHistory = history.slice(0, stepNumber + 1);
    const current = timeInHistory[stepNumber];
    const squares = [...current];
  };

  return <div>Game</div>;
};

export default Game;
