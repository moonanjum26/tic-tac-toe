import React, { Component } from 'react';
import Square from './Square';

class Board extends Component {


    renderSquare(i){
        return <Square value = {this.props.square[i]} winner = {this.props.winner} square = {this.props.square}
             coor_a = {this.props.val_a} coor_b = {this.props.val_b} coor_c = {this.props.val_c} index = {i}
               onClick= {() => this.props.onClick(i)}/>
    }

    
    render() {
        //const status = 'Next Player : ' +(this.state.xIsNext ? 'X' : 'O')
        return (
            <div>
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

export default Board;