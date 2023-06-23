import React, { useState } from 'react';
import './App.css';

const CheckersBoard = () => {
  const [board, setBoard] = useState([
    ['', 'W', '', 'W', '', 'W', '', 'W'],
    ['W', '', 'W', '', 'W', '', 'W', ''],
    ['', 'W', '', 'W', '', 'W', '', 'W'],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['B', '', 'B', '', 'B', '', 'B', ''],
    ['', 'B', '', 'B', '', 'B', '', 'B'],
    ['B', '', 'B', '', 'B', '', 'B', ''],
  ]);

  const renderPiece = (piece, row, col) => {
    if (piece === 'W') {
      return <div className="piece white-piece" key={`${row}-${col}`}></div>;
    } else if (piece === 'B') {
      return <div className="piece black-piece" key={`${row}-${col}`}></div>;
    } else {
      return null;
    }
  };

  const renderSquare = (piece, row, col) => {
    const isDarkSquare = (row + col) % 2 === 1;
    const classNames = `square ${isDarkSquare ? 'dark' : 'light'}`;

    return (
      <div className={classNames} key={`${row}-${col}`}>
        {renderPiece(piece, row, col)}
      </div>
    );
  };

  const renderBoard = () => {
    return board.map((row, rowIndex) => {
      return row.map((piece, colIndex) => {
        return renderSquare(piece, rowIndex, colIndex);
      });
    });
  };

  return <div className="checkers-board">{renderBoard()}</div>;
};

export default CheckersBoard;
