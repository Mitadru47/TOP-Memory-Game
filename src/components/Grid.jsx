import "../styles/grid.css";
import React, { useEffect } from "react";

function Card(props){
    return (

        <div className="cards" onClick={props.handleClick}>

            {props.value}

        </div>

    );
}

function Grid(){

    const data = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L"];
    
    const [gridData, setGridData] = React.useState([]);
    const [gameData, setGameData] = React.useState([]); 
    
    useEffect(() => setGridData(choose_randomFour(data)), []);
    
    let failCount = 0;
    function clickEvent(event){

        setGameData((prevValue) => {

            if(!prevValue.includes(event.target.innerText)){
            
                prevValue.push(event.target.innerText);
                console.log(gameData);

            } else {

                // Accounting for Double Mounting/Failure.
                failCount++;
                
                if(failCount == 2){
                    
                    failCount = 0;
                    console.log(event.target.innerText + " - Failed!");
                    
                    prevValue = [];
                }
            }

            setGridData(choose_randomFour(data));
            return prevValue;
        });
    }

    return (

        <div id="grid">

            <Card key="0" value={gridData[0]} handleClick={clickEvent} />
            <Card key="1" value={gridData[1]} handleClick={clickEvent} />
            <Card key="2" value={gridData[2]} handleClick={clickEvent} />
            <Card key="3" value={gridData[3]} handleClick={clickEvent} />

        </div>

    );
}

function choose_randomFour(data){

    const result = [];

    let index = Math.round(Math.random() * 11);
    // console.log(index);

    let count = 4;

    while(count != 0){

        result.push(data[index++]);
       
        if(index > 11){
            index = 0;
        }

        count--;
    }

    // console.log(result);
    return result;
}

export default Grid;