import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './tictactoe.css';
import {Route, Link } from "react-router-dom";

//square class defines the state of every square
function Square2(props) {
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    )
}
  
  //board class defines every square
  class Board2 extends React.Component {

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
        var comp_move = -1;

        //ignroes if there is a winner or if a square is filled
        if (calculateWinner(squares) || squares[i]) {
            return;
        }

        squares[i] = this.state.xIsNext ? 'X' : 'O';

        this.setState({
            squares: squares,
            xIsNext: !this.state.xIsNext,
        });


        if((this.state.xIsNext) && (calculateTie(squares) == false)) {
            comp_move = com(squares, i);
            //comp_move = setTimeout(com(squares, i),1000);
            if (calculateWinner(squares) || squares[comp_move]) {
                return;
            }

            squares[comp_move] = !this.state.xIsNext ? 'X' : 'O';

            this.setState({
                squares: squares,
                xIsNext: this.state.xIsNext,
            });

        }
        //alert(comp_move)
    }

    //retrieves value of square
    renderSquare(i) {
      return ( 
            <Square2
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
            <a href="comptictactoe.js">
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
  
  function Game2 (){
      return (       
            <div className="game">
                <div className="title">Tic-Tac-Toe</div>
                <div className="game-board">
                    <Board2 />
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

    function com(squares, index) {
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
    
            if ((squares[a] === null) && 
                    (squares[b] === "O") && (squares[c] === "O")) {
                //alert("pick a off at index" + i);
                return a;
            }

            else if ((squares[b] === null) && 
                    (squares[a] === "O") && (squares[c] === "O")) {
                //alert("pick b off at index" + i);
                return b;
            }

            else if ((squares[c] === null) && 
                    (squares[a] === "O") && (squares[b] === "O")) {
                //alert("pick c off at index" + i);
                return c;
            }
        }

        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
    
            if ((squares[a] === null) && 
                    (squares[b] === "X") && (squares[c] === "X")) {
                //alert("pick a def at index" + i);
                return a;
            }

            else if ((squares[b] === null) && 
                    (squares[a] === "X") && (squares[c] === "X")) {
                //alert("pick b def at index" + i);
                return b;
            }

            else if ((squares[c] === null) && 
                    (squares[a] === "X") && (squares[b] === "X")) {
                //alert("pick c def at index" + i);
                return c;
            }
        }

        var taken = false;
        var move = -1;

        while(!taken) {
            move = parseInt((Math.random() * 9));
            //alert("Move is " + move);
            if(squares[move] == null)
                taken = true;
        }
        
        return move;
    }
  
  // ========================================
  export default Game2;