import React, { Component } from 'react';
import Board from './Board';
import './style.css';

class Game extends Component {

    constructor(props) {
        super(props);
        this.state = {
          history: [{
            square: Array(9).fill(null),
          }],
          xIsNext: true,
          stepNum : 0
        }
    }

    handleClick = (i) => {
        const history = this.state.history.slice(0, this.state.stepNum + 1 )
        //console.log(history)
        const current = history[history.length - 1]
        //console.log(current)
        //console.log(history.length)
        const square = current.square.slice()
       // console.log(square)
        //console.log("hello")
        if(this.calculateWinner(square) || square[i]){
            //console.log(square[i])
            return
        }
        square[i] = this.state.xIsNext ? 'X' : 'O'
        this.setState({
            history: history.concat([{
                square:square
            }]),

            xIsNext:!this.state.xIsNext,
            stepNum : history.length   
        })
    }
    
    calculateWinner = (square) => {
        //console.log(square)
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ]
        for(let i=0; i < lines.length; i++){
            
            let [a, b, c] = lines[i]
            if(square[a] && square[a] === square[b] && square[a] === square[c]){
                return [square[a], a, b, c]
            }  
        }
        return false
    }


    jumpTo = (step) => {
        this.setState ({
            stepNum : step,
            xIsNext : (step % 2) === 0
        })

    }

    render() {
        const history = this.state.history
        const current = history[this.state.stepNum]
       // console.log(current)
        const winner = this.calculateWinner(current.square)
        const a = winner[1], 
              b = winner[2],
              c = winner[3]
              

        const moves = history.map((id, move) => {
            const desc = move ? 'go to move ' +(move) : 'go to start'
            return(
                <li key = {move}>
                    <button onClick = {() => this.jumpTo(move)}>{desc}</button>
                </li>
            )
        })
        let status 
        
        if (winner){
            
            status = 'winner is ' +(winner[0])
            }
        else {
             status ='Next player ' +(this.state.xIsNext ? 'X' : 'O') 
            }
        let count = 0
        for(let i = 0; i<9; i++){
            if(current.square[i] === 'X' || current.square[i] === 'O'){
                count = count + 1
                //console.log(count)
            }
            if (count === 9){
                if(winner === false){
                    status = "draw"
                }
            }
        
        }
        return (
            <div >
                <div>
                    <Board square={current.square} winner={winner} val_a={a} val_b={b} val_c={c} onClick={(i) => this.handleClick(i)}/>
                </div>
                <div className="game-info">
                    <div>{ status }</div>
                    <div>{moves}</div>
                </div>
                
            </div>
        );
    }
}

export default Game;