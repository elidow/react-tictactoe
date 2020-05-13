import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './homepage.js';

import Game from './tictactoe.js';
import Board from './tictactoe.js';
import Square from './tictactoe.js';

import Game2 from './comptictactoe.js';
import Board2 from './comptictactoe.js';
import Square2 from './comptictactoe.js';


import {Route, Link } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Route exact path="/homepage.js" component={Home} />
            <Route exact path="/tictactoe.js" component={Game} />
            <Route exact path="/comptictactoe.js" component={Game2} />
        </div>
    );
}

export default App