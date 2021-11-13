import styled from "styled-components";

const StyledGameProgressContainer = styled.div`
display:flex;
justify-content:space-around;
background-color:#7faed4;
button {
    border-radius:25px;
}
section {
    display:flex;
    button {
        border-radius:25px;
    }
    p {
        padding:0 1.3em;
    }
}
`;

export default StyledGameProgressContainer;