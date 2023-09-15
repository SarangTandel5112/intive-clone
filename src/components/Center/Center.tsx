import React from "react";
import styled from "styled-components";

const Div = styled.div`
    display: flex;
    justify-content: center;
`;

function Center({ children }: any) {
    return <Div>{children}</Div>;
}

export default Center;
