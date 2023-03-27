import React from 'react'
import './Board.css'
import { useState } from 'react'
import Square from './Square'
const Board = () => {
    const [xIsNext, setIsNext] = useState(true);
    const [squares, setSquares] = useState(Array(9).fill(null));

    function vinodhClick(i) {
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        const nextSquares = squares.slice();
        if (xIsNext) {
            nextSquares[i] = 'K';
        }
        else {
            nextSquares[i] = 'P';
        }

        setSquares(nextSquares);
        setIsNext(!xIsNext);
    }
    const winner = calculateWinner(squares);
    let status;

    if (winner) {
        status = 'Winner: ' + winner;
    } else {
        status = 'Next Player : ' + (xIsNext ? 'K' : 'P');
    }
    return (
        <div >
            <>
                <div className="Status"> {status} </div>

                <div className="board-row">
                    <Square value={squares[0]} OnMohanClick={() => vinodhClick(0)} />
                    <Square value={squares[1]} OnMohanClick={() => vinodhClick(1)} />
                    <Square value={squares[2]} OnMohanClick={() => vinodhClick(2)} />
                </div>
                <div className="board-row">
                    <Square value={squares[3]} OnMohanClick={() => vinodhClick(3)} />
                    <Square value={squares[4]} OnMohanClick={() => vinodhClick(4)} />
                    <Square value={squares[5]} OnMohanClick={() => vinodhClick(5)} />
                </div>
                <div className="board-row">
                    <Square value={squares[6]} OnMohanClick={() => vinodhClick(6)} />
                    <Square value={squares[7]} OnMohanClick={() => vinodhClick(7)} />
                    <Square value={squares[8]} OnMohanClick={() => vinodhClick(8)} />
                </div>

            </>


        </div>


    );

}

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
        [0, 4, 2],
        [6, 4, 8],
        [0, 4, 6],
        [2, 4, 8],
        [3, 1, 5],
        [3, 7, 5],
        [1, 3, 7],
        [1, 5, 7],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];

        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];

        }
        
    }
    return null;
}
export default Board