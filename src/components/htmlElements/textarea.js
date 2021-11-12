
function TextArea (props) {
    return (
        <textarea required name={props.name} value={props.value} onChange={props.inputEvent} placeholder={props.text}/>
    );
};

export default TextArea;