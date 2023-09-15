import React, { ReactNode } from "react";
import Navbar from "../Navbar/Navbar";
import styled from "styled-components";
const Section = styled.section`
    padding: 0% 2%;
`;
function Layout({ children }: { children: ReactNode }) {
    return (
        <Section>
            <Navbar />
            {children}
        </Section>
    );
}

export default Layout;
