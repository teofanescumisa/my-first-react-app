
function Input (props) {
    return(
        <input required={true} name={props.name} value={props.value} placeholder={props.placeholder} onChange={props.inputEvent} type={props.type}/>
    );
};

export default Input;
