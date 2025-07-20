import React, { useRef, useEffect, useState } from 'react';

const gridSize = 15;
const tileSize = 20;
const initialSnake = [{ x: 8, y: 8 }];
const initialDirection = { x: 1, y: 0 };

function getRandomFood(snake) {
  let food;
  do {
    food = {
      x: Math.floor(Math.random() * gridSize),
      y: Math.floor(Math.random() * gridSize),
    };
  } while (snake.some((s) => s.x === food.x && s.y === food.y));
  return food;
}

export default function SnakeGame() {
  const canvasRef = useRef(null);
  const [snake, setSnake] = useState(initialSnake);
  const [direction, setDirection] = useState(initialDirection);
  const [food, setFood] = useState(getRandomFood(initialSnake));
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const handleKey = (e) => {
      if (['ArrowUp', 'ArrowDown'].includes(e.key)) {
        e.preventDefault();
      }
      if (e.key === 'ArrowUp' && direction.y !== 1) setDirection({ x: 0, y: -1 });
      if (e.key === 'ArrowDown' && direction.y !== -1) setDirection({ x: 0, y: 1 });
      if (e.key === 'ArrowLeft' && direction.x !== 1) setDirection({ x: -1, y: 0 });
      if (e.key === 'ArrowRight' && direction.x !== -1) setDirection({ x: 1, y: 0 });
    };
    window.addEventListener('keydown', handleKey, { passive: false });
    return () => window.removeEventListener('keydown', handleKey);
  }, [direction]);

  useEffect(() => {
    if (gameOver) return;
    const interval = setInterval(() => {
      setSnake((prev) => {
        const newHead = {
          x: prev[0].x + direction.x,
          y: prev[0].y + direction.y,
        };
        if (
          newHead.x < 0 ||
          newHead.x >= gridSize ||
          newHead.y < 0 ||
          newHead.y >= gridSize ||
          prev.some((s) => s.x === newHead.x && s.y === newHead.y)
        ) {
          setGameOver(true);
          return prev;
        }
        let newSnake = [newHead, ...prev];
        if (newHead.x === food.x && newHead.y === food.y) {
          setFood(getRandomFood(newSnake));
          setScore((s) => s + 1);
        } else {
          newSnake.pop();
        }
        return newSnake;
      });
    }, 120);
    return () => clearInterval(interval);
  }, [direction, food, gameOver]);

  useEffect(() => {
    const ctx = canvasRef.current.getContext('2d');
    ctx.clearRect(0, 0, gridSize * tileSize, gridSize * tileSize);
    ctx.fillStyle = '#22d3ee';
    snake.forEach((s) => ctx.fillRect(s.x * tileSize, s.y * tileSize, tileSize, tileSize));
    ctx.fillStyle = '#f59e42';
    ctx.fillRect(food.x * tileSize, food.y * tileSize, tileSize, tileSize);
  }, [snake, food]);

  return (
    <div className="flex flex-col items-center mt-8">
      <h2 className="text-2xl font-bold mb-2">Jogo da Cobrinha</h2>
      <canvas ref={canvasRef} width={gridSize * tileSize} height={gridSize * tileSize} className="border mb-2" />
      <div className="mb-2">Pontuação: {score}</div>
      {gameOver && <div className="text-red-500 font-bold">Game Over!</div>}
      <button
        className="mt-2 px-4 py-2 bg-cyan-500 text-white rounded"
        onClick={() => {
          setSnake(initialSnake);
          setDirection(initialDirection);
          setFood(getRandomFood(initialSnake));
          setGameOver(false);
          setScore(0);
        }}
      >
        Reiniciar
      </button>
    </div>
  );
}
