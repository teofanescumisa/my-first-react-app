
function Button (props) {
    return (
        <button onClick={props.btnEvent}>{props.text}</button>
    )
}

export default Button;