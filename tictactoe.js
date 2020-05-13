import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './tictactoe.css';
import {Route, Link } from "react-router-dom";

//square class defines the state of every square
function Square(props) {
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    )
}
  
  //board class defines every square
  class Board extends React.Component {

    //constructor of the board, intializes and empty board 
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            xIsNext: true,
        };
    }

    //sets proper state to square
    handleClick(i) {
        const squares = this.state.squares.slice();

        //ignroes if there is a winner or if a square is filled
        if (calculateWinner(squares) || squares[i]) {
            return;
        }

        squares[i] = this.state.xIsNext ? 'X' : 'O';

        this.setState({
            squares: squares,
            xIsNext: !this.state.xIsNext,
        });
    }

    //retrieves value of square
    renderSquare(i) {
      return ( 
            <Square
                value={this.state.squares[i]}
                onClick={() => this.handleClick(i)}
            /> 
        );
    }
  
    //displays board by rows
    render() {
        const tie = calculateTie(this.state.squares);
        const winner = calculateWinner(this.state.squares);
        let status;
        if (winner) {
            status = 'Winner: ' + winner;
            document.getElementById("playagainbtn").type = "button";
            document.getElementById("toHomebtn").type = "button";
        }
        else {
            if(tie === true) {
                status = "The game is a tie!";
                document.getElementById("playagainbtn").type = "button";
                document.getElementById("toHomebtn").type = "button";
            }
            else {
                status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
            }
        }

  
      return (
        <div>
          <div className="status" id="status">{status}</div>
          <div className="playagain">
            <a href="tictactoe.js">
              <input type="hidden" id="playagainbtn" 
              value="Play Again!"/>
              </a></div>
          <div className="toHome">
            <a href="homepage.js">
              <input type="hidden" id="toHomebtn" 
              value="Back to Home"/>
              </a></div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }
  
  function Game (){
      return (       
            <div className="game">
                <div className="title">Tic-Tac-Toe</div>
                <div className="game-board">
                    <Board />
                </div>
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
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  function calculateTie(squares) {
    var full = true;
      for (let i = 0; i < squares.length; i++)
        if(squares[i] == null)
            full = false;
    return full;
  }
  
  // ========================================
  export default Game;