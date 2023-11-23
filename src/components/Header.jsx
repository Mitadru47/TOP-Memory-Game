import "../styles/header.css";

function Header(){

    return (

        <div id="header">

            <div id="headerSideA"> 

                <div id="heading">The Memory Game</div>
                <div id="instruction">**Click on an item twice, you lose!</div>

            </div>

            <div id="headerSideB"> 

                <div id="highScore">High Score:</div>
                <div id="score">Score:</div>

            </div>

        </div>
    );
}

export default Header;