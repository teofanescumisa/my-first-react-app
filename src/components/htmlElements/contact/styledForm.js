import styled from "styled-components";

const StyledForm = styled(Form)`
    display:flex;
    flex-direction:column;
    background-color:tomato;
    width:350px;
    padding:1.3em;
    margin: 0 auto;
    section {
        display:flex;
        flex-direction:row;
        justify-content:space-between;
        font-size:1.5em;
        margin-bottom:5px;
    }
    textarea {
        height:10em;
    }
    input {
        border-radius:15px
    }
`

function Form ({ className, children }) {
    return(
        <form className={className}>
            {children}
        </form>
    );
};

export default StyledForm;