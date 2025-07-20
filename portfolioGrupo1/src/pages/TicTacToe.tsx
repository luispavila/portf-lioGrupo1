import React, { useState } from 'react';

function checkWinner(board) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let line of lines) {
    const [a, b, c] = line;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  return null;
}

export default function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const winner = checkWinner(board);
  const isDraw = board.every((cell) => cell) && !winner;

  function handleClick(i) {
    if (board[i] || winner) return;
    const newBoard = board.slice();
    newBoard[i] = xIsNext ? 'X' : 'O';
    setBoard(newBoard);
    setXIsNext(!xIsNext);
  }

  function restart() {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
  }

  return (
    <div className="flex flex-col items-center mt-8">
      <h2 className="text-2xl font-bold mb-2">Jogo da Velha</h2>
      <div className="grid grid-cols-3 gap-2 mb-2">
        {board.map((cell, i) => (
          <button
            key={i}
            className="w-16 h-16 text-2xl font-bold bg-gray-100 border border-gray-400 rounded"
            onClick={() => handleClick(i)}
          >
            {cell}
          </button>
        ))}
      </div>
      <div className="mb-2">
        {winner ? `Vencedor: ${winner}` : isDraw ? 'Empate!' : `Próximo: ${xIsNext ? 'X' : 'O'}`}
      </div>
      <button className="mt-2 px-4 py-2 bg-cyan-500 text-white rounded" onClick={restart}>
        Reiniciar
      </button>
    </div>
  );
}
