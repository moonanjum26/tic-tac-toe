import React from 'react';

function Square (props) {
    //console.log(props.square)
    if(props.winner !== false){
        console.log(props.coor_c)
        return (
            <button onClick={props.onClick}><mark>{props.square[props.coor_a]} {props.square[props.coor_a]}</mark></button>
        )
    }
    else{
        return(
        <button onClick={props.onClick}> {props.value} </button>
        )

    }
   

    }
    

export default Square;



