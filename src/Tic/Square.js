import React from 'react';

function Square (props) {
    //console.log(props.square)
    console.log(props)
    if(props.winner && (props.index === props.coor_a || props.index === props.coor_b || props.index === props.coor_c) ){
        return (
            <button onClick={props.onClick}><mark>{props.square[props.coor_a]}</mark></button>
        )
    }
    else{
        return(
        <button onClick={props.onClick}> {props.value} </button>
        )

    }
   

    }
    

export default Square;



