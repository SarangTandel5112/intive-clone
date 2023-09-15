import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import styled from "styled-components";

const Header = styled.header`
    height: 40vh;
    position: relative;
    margin-bottom: 2rem;
    .hero-img {
        height: 100%;
        border-radius: var(--borderRadius);
    }
`;
const Container = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.632);
    border-radius: var(--borderRadius);
`;
const InnerDiv = styled.div`
    color: white;
    text-align: center;
`;
const Button = styled.button`
    cursor: pointer;
    padding: 10px 20px;
    margin: 10px;
`;
function MainImage() {
    return (
        <div>
            <Header>
                <StaticImage
                    src="../../images/main.jpg"
                    alt="main-img"
                    className="hero-img"
                    placeholder="tracedSVG"
                    layout="fullWidth"
                ></StaticImage>
                <Container>
                    <InnerDiv className="hero-text">
                        <h1>Foodie's Paradise: Where Every Bite Counts</h1>
                        <Link to="/recipies">
                            <Button>Dive Into Recipes</Button>
                        </Link>
                    </InnerDiv>
                </Container>
            </Header>
        </div>
    );
}

export default MainImage;
