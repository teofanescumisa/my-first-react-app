
function GameCounter (props) {
    return(
        <header>
            <p> Totals win : {props.win} </p>
            <p> History of last 7 hands played </p>
            <p> Totals lose : {props.lose} </p>
        </header>
    );
};

export default GameCounter;