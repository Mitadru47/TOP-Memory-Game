import "../styles/grid.css";

function Card(props){
    return (

        <div className="cards">

            {props.value}

        </div>

    );
}

function Grid(){

    const data = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L"];
    const gridData = choose_randomFour(data);

    return (

        <div id="grid">

            <Card key="0" value={gridData[0]} />
            <Card key="1" value={gridData[1]} />
            <Card key="2" value={gridData[2]} />
            <Card key="3" value={gridData[3]} />

        </div>

    );
}

function choose_randomFour(data){

    const result = [];

    let index = Math.round(Math.random() * 11);
    console.log(index);

    let count = 4;

    while(count != 0){

        result.push(data[index++]);
       
        if(index > 11){
            index = 0;
        }

        count--;
    }

    console.log(result);
    return result;
}

export default Grid;