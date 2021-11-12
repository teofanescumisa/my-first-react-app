import styled from "styled-components";

const PayTableContainer = styled.div`
display:grid;
background-color:#7faed4;
section {
    padding: 0 35px;
    display:flex;
    justify-content:space-between;
    border-radius:15px;
    &:hover {
        background-color:tomato;
        border-radius:15px;
    }
}
p {
    color:#000;
    margin:5px 0;
    font-weight:bold;
}
`;

export default PayTableContainer;