
function Input (props) {
    return(
        <input value={props.value} placeholder={props.placeholder} onChange={props.inputEvent} type={props.type}/>
    );
};

export default Input;
