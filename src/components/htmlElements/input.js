
function Input (props) {
    return(
        <input required={true} value={props.value} placeholder={props.placeholder} onChange={props.inputEvent} type={props.type}/>
    );
};

export default Input;
