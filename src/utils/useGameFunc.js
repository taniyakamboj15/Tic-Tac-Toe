import { useEffect, useState, useCallback, useMemo } from "react";
import winPattern from "./winPattern";

const useGameFunc = () => {
  const [box, setBox] = useState(Array(9).fill(null));
  const [isXTurn, setXturn] = useState(true);
  const [winner, setWinner] = useState(null);
  const [isDraw, setIsDraw] = useState(false);
  const [countDown, setCountDown] = useState(null);
  const [animate, setAnimate] = useState(false);
  const [showReset, setShowReset] = useState(false);
  const [gameEnded, setGameEnded] = useState(false);

  // Memoized win checking function for better performance
  const checkWinner = useMemo(() => {
    return (board) => {
      for (let pattern of winPattern) {
        const [a, b, c] = pattern;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
          return board[a];
        }
      }
      return null;
    };
  }, []);

  // Check for draw condition
  const checkDraw = useMemo(() => {
    return (board) => {
      return board.every(cell => cell !== null);
    };
  }, []);

  // Optimized handleBox with useCallback to prevent unnecessary re-renders
  const handleBox = useCallback((ind) => {
    if (box[ind] || gameEnded) return;

    const newBox = [...box];
    newBox[ind] = isXTurn ? "x" : "o";
    setBox(newBox);
    setXturn(!isXTurn);
    
    if (!showReset) {
      setShowReset(true);
    }
  }, [box, isXTurn, gameEnded, showReset]);

  // Check for winner or draw after each move
  useEffect(() => {
    const currentWinner = checkWinner(box);
    const currentDraw = !currentWinner && checkDraw(box);
    
    if (currentWinner) {
      setWinner(currentWinner);
      setGameEnded(true);
    } else if (currentDraw) {
      setIsDraw(true);
      setGameEnded(true);
    }
  }, [box, checkWinner, checkDraw]);

  // Handle game end countdown and reset
  useEffect(() => {
    if (winner || isDraw) {
      let countTime = 5;
      setCountDown(countTime);
      
      const timeOut = setInterval(() => {
        countTime -= 1;
        setCountDown(countTime);
        
        if (countTime === 0) {
          setAnimate(true);
          clearInterval(timeOut);
          setTimeout(() => {
            resetGame();
          }, 2000);
        }
      }, 1000);

      // Cleanup interval on unmount or when effect re-runs
      return () => clearInterval(timeOut);
    }
  }, [winner, isDraw]);

  // Optimized reset function with useCallback
  const resetGame = useCallback(() => {
    setXturn(true);
    setBox(Array(9).fill(null));
    setWinner(null);
    setIsDraw(false);
    setCountDown(null);
    setAnimate(false);
    setShowReset(false);
    setGameEnded(false);
  }, []);

  return { 
    box, 
    handleBox, 
    resetGame, 
    countDown, 
    winner, 
    isDraw,
    animate, 
    showReset,
    currentPlayer: isXTurn ? 'X' : 'O'
  };
};

export default useGameFunc;
