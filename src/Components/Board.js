import React from "react";
import Block from "./block";
import useGameFunc from "../utils/useGameFunc";

const Board = () => {
  const { 
    winner, 
    isDraw, 
    countDown, 
    animate, 
    handleBox, 
    resetGame, 
    box, 
    showReset,
    currentPlayer 
  } = useGameFunc();

  // Game status message
  const getGameMessage = () => {
    if (winner) {
      return `🎉 Congratulations! Player ${winner.toUpperCase()} wins! Game will reset in ${countDown}s`;
    }
    if (isDraw) {
      return `🤝 It's a draw! Game will reset in ${countDown}s`;
    }
    return `Current turn: Player ${currentPlayer}`;
  };

  return (
    <div className='flex flex-col items-center'>
      {/* Game status display */}
      <div className='h-16 my-4 flex items-center justify-center'>
        <span 
          className='text-sm md:text-lg font-semibold text-center text-tgray px-4'
          role="status"
          aria-live="polite"
        >
          {getGameMessage()}
        </span>
      </div>

      {/* Game board */}
      <div
        className='grid grid-cols-3 grid-rows-3 w-72 h-72 sm:w-96 sm:h-96 mt-6 md:mt-6 gap-1 bg-tgray p-1 rounded-lg shadow-lg'
        role="grid"
        aria-label="Tic-tac-toe game board"
      >
        {box.map((value, index) => (
          <Block
            key={index}
            value={value}
            index={index}
            setBox={handleBox}
            animate={animate}
            disabled={!!(winner || isDraw)}
          />
        ))}
      </div>

      {/* Reset button */}
      <div className='flex mt-6 w-72 sm:w-96 h-14'>
        {showReset && (
          <button
            className='grow bg-hgree text-white h-12 rounded-lg font-bold hover:bg-tgray hover:scale-105 transition-all duration-200 shadow-md focus:outline-none focus:ring-2 focus:ring-tgray focus:ring-opacity-50'
            onClick={resetGame}
            aria-label="Reset the game"
          >
            🔄 Reset Game
          </button>
        )}
      </div>
    </div>
  );
};

export default React.memo(Board);
