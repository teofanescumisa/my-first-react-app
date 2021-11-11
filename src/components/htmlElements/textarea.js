
function TextArea (props) {
    return (
        <textarea required value={props.value} onChange={props.inputEvent} placeholder={props.text}/>
    );
};

export default TextArea;