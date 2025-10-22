import React from "react";
import Board from "./Board";

const App = () => {
  return (
    <div className='flex flex-col items-center justify-center bg-cream min-h-screen p-4'>
      <header className='text-center mb-8'>
        <h1 className='text-tgray font-extrabold text-4xl md:text-5xl mb-2 drop-shadow-lg'>
          🎮 Tic Tac Toe
        </h1>
        <p className='text-tgray text-lg md:text-xl opacity-80'>
          Challenge a friend to a classic game!
        </p>
      </header>
      <main>
        <Board />
      </main>
      <footer className='mt-8 text-tgray text-sm opacity-60'>
        <p>Built with React & Tailwind CSS</p>
      </footer>
    </div>
  );
};

export default React.memo(App);
