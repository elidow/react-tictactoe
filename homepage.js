import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './homepage.css';
import {Route, Link } from "react-router-dom";


class Menu extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            threebythree: "off",
            player: "off",
            computer: "off",
        }

        this.gameChange = this.gameChange.bind(this);
        this.playerChange = this.playerChange.bind(this);
        this.compChange = this.compChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    gameChange(event) {
        var btnstate = "";
        if(this.state.threebythree == "off")
            btnstate = "on";
        else
            btnstate = "off";
        this.setState({threebythree: btnstate});
    }

    playerChange(event) {
        var playerstate = "";
        var compstate = "";

        if(this.state.player == "off"){
            playerstate = "on";
            compstate = "off";
        }

        this.setState({player: playerstate});
        this.setState({computer: compstate});
    }

    compChange(event) {
        var playerstate2 = "";
        var compstate2 = "";

        if(this.state.computer == "off") {
            compstate2 = "on";
            playerstate2 = "off";
        }

        this.setState({player: playerstate2});
        this.setState({computer: compstate2});
    }

    handleSubmit(event) {
        //alert(this.state.threebythree);
        //alert(this.state.player);
        //alert(this.state.computer);
        if(this.state.threebythree == "on")
        {
            if(this.state.player == "on")
                window.location.href = "tictactoe.js";
            else if(this.state.computer == "on")
                window.location.href = "comptictactoe.js"
            else
                alert("Invalid entry. Please Select An Opponent");

        }
        else
        {
            alert("Invalid entry. Please Select A Game");
        }
        event.preventDefault();
    }


    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <div className="prompt">Select Game Type</div>
                <div className="break"><br></br></div>
                <div className="tictactoe">
                    <input type="radio" id="threebythree" name="threebythree" 
                    onChange={this.gameChange}></input>
                    <label for="threebythree">3 x 3</label>
                </div>
                <div className="PvsC">
                    <div className="break"><br></br></div>
                    <div className="PvsCprompt">Select Opponent</div>
                    <div className="break"><br></br></div>
                    <div className="Player">
                        <input type="radio" id="player" name="opponent"
                        onChange={this.playerChange}></input>
                        <label for="player">Player</label>
                    </div>
                    <div className="break"><br></br></div>
                    <div className="Computer">
                        <input type="radio" id="computer" name="opponent" 
                        onChange={this.compChange} ></input>
                        <label for="computer">Computer</label>
                    </div>
                </div>
                <div className="submit">
                    <input type="submit" value="Submit" />
                </div>
            </form>
        );
    }

}

    function Home (){
        return (       
            <div className="Home">
                <div className="title">Tic-Tac-Toe</div>
                <div className="menu">
                    < Menu />
                </div>
            </div>
        );
    }

export default Home;