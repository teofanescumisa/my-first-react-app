
function TextArea (props) {
    return (
        <textarea value={props.value} onChange={props.inputEvent}/>
    );
};

export default TextArea;