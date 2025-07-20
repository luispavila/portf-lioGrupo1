import React, { useRef, useEffect, useState } from 'react';

const width = 400;
const height = 300;
const paddleHeight = 60;
const paddleWidth = 10;
const ballSize = 10;
const initialBall = { x: width / 2, y: height / 2, dx: 3, dy: 2 };

export default function PingPong() {
  const canvasRef = useRef(null);
  const [paddleY, setPaddleY] = useState(height / 2 - paddleHeight / 2);
  const [ball, setBall] = useState(initialBall);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'ArrowUp') setPaddleY((y) => Math.max(0, y - 20));
      if (e.key === 'ArrowDown') setPaddleY((y) => Math.min(height - paddleHeight, y + 20));
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  useEffect(() => {
    if (gameOver) return;
    const interval = setInterval(() => {
      setBall((prev) => {
        let { x, y, dx, dy } = prev;
        x += dx;
        y += dy;
        if (y < 0 || y > height - ballSize) dy = -dy;
        // Paddle collision
        if (
          x < paddleWidth &&
          y > paddleY &&
          y < paddleY + paddleHeight
        ) {
          dx = -dx;
          setScore((s) => s + 1);
        }
        // Missed paddle
        if (x < 0) {
          setGameOver(true);
          return prev;
        }
        // Right wall
        if (x > width - ballSize) dx = -dx;
        return { x, y, dx, dy };
      });
    }, 20);
    return () => clearInterval(interval);
  }, [paddleY, gameOver]);

  useEffect(() => {
    const ctx = canvasRef.current.getContext('2d');
    ctx.clearRect(0, 0, width, height);
    // Paddle
    ctx.fillStyle = '#22d3ee';
    ctx.fillRect(0, paddleY, paddleWidth, paddleHeight);
    // Ball
    ctx.fillStyle = '#f59e42';
    ctx.fillRect(ball.x, ball.y, ballSize, ballSize);
  }, [paddleY, ball]);

  function restart() {
    setPaddleY(height / 2 - paddleHeight / 2);
    setBall(initialBall);
    setScore(0);
    setGameOver(false);
  }

  return (
    <div className="flex flex-col items-center mt-8">
      <h2 className="text-2xl font-bold mb-2">Ping Pong</h2>
      <canvas ref={canvasRef} width={width} height={height} className="border mb-2" />
      <div className="mb-2">Pontuação: {score}</div>
      {gameOver && <div className="text-red-500 font-bold">Game Over!</div>}
      <button className="mt-2 px-4 py-2 bg-cyan-500 text-white rounded" onClick={restart}>
        Reiniciar
      </button>
    </div>
  );
}
