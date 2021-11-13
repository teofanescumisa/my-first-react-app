
function CardGame (props) {
    return(
        <section>
            {props.hold ? <p>HOLD</p> :null }
            <img src={require(`${props.link}`).default} alt={props.altName} onClick={props.holdEvent} name={props.name}/>
        </section>
    );
};

export default CardGame;