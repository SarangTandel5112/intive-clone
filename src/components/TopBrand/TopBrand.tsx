import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";

const Section = styled.section`
    h1 {
        font-size: 1.5rem;
    }
    @mixin white-gradient {
        background: linear-gradient(
            to right,
            rgba(255, 255, 255, 1) 0%,
            rgba(255, 255, 255, 0) 100%
        );
    }

    @keyframes scroll {
        0% {
            transform: translateX(0);
        }
        100% {
            transform: translateX(calc(-250px * 14));
        }
    }

    // Styling
    .slider {
        background: white;
        box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.125);
        height: 15vw;
        margin: auto;
        overflow: hidden;
        position: relative;

        &::before,
        &::after {
            @include white-gradient;
            content: "";
            height: 100px;
            position: absolute;
            width: 200px;
            z-index: 2;
        }

        &::after {
            right: 0;
            top: 0;
            transform: rotateZ(180deg);
        }

        &::before {
            left: 0;
            top: 0;
        }

        .slide-track {
            animation: scroll 120s linear infinite;
            display: flex;
            width: calc(250px * 10);
        }

        .slide {
            height: 20vw;
            width: 13vw;
            margin: 0px 5px;
        }
    }
`;

function TopBrand() {
    return (
        <Section>
            <h1>Top brands for you</h1>
            <div className="slider">
                <div className="slide-track">
                    <div className="slide">
                        <StaticImage
                            src="../../images/burger.png"
                            alt="eggs"
                            className="hero-img"
                            placeholder="tracedSVG"
                            layout="fullWidth"
                        ></StaticImage>
                    </div>
                    <div className="slide">
                        <StaticImage
                            src="../../images/Domino.jpg"
                            alt="eggs"
                            className="hero-img"
                            placeholder="tracedSVG"
                            layout="fullWidth"
                        ></StaticImage>
                    </div>
                    <div className="slide">
                        <StaticImage
                            src="../../images/kfc.jpeg"
                            alt="eggs"
                            className="hero-img"
                            placeholder="tracedSVG"
                            layout="fullWidth"
                        ></StaticImage>
                    </div>
                    <div className="slide">
                        <StaticImage
                            src="../../images/lamilano.png"
                            alt="eggs"
                            className="hero-img"
                            placeholder="tracedSVG"
                            layout="fullWidth"
                        ></StaticImage>
                    </div>
                    <div className="slide">
                        <StaticImage
                            src="../../images/lapinoz.png"
                            alt="eggs"
                            className="hero-img"
                            placeholder="tracedSVG"
                            layout="fullWidth"
                        ></StaticImage>
                    </div>
                    <div className="slide">
                        <StaticImage
                            src="../../images/mcd.png"
                            alt="eggs"
                            className="hero-img"
                            placeholder="tracedSVG"
                            layout="fullWidth"
                        ></StaticImage>
                    </div>
                    <div className="slide">
                        <StaticImage
                            src="../../images/Subwaylogo.png"
                            alt="eggs"
                            className="hero-img"
                            placeholder="tracedSVG"
                            layout="fullWidth"
                        ></StaticImage>
                    </div>
                    <div className="slide">
                        <StaticImage
                            src="../../images/burger.png"
                            alt="eggs"
                            className="hero-img"
                            placeholder="tracedSVG"
                            layout="fullWidth"
                        ></StaticImage>
                    </div>
                    <div className="slide">
                        <StaticImage
                            src="../../images/Domino.jpg"
                            alt="eggs"
                            className="hero-img"
                            placeholder="tracedSVG"
                            layout="fullWidth"
                        ></StaticImage>
                    </div>
                    <div className="slide">
                        <StaticImage
                            src="../../images/kfc.jpeg"
                            alt="eggs"
                            className="hero-img"
                            placeholder="tracedSVG"
                            layout="fullWidth"
                        ></StaticImage>
                    </div>
                    <div className="slide">
                        <StaticImage
                            src="../../images/lamilano.png"
                            alt="eggs"
                            className="hero-img"
                            placeholder="tracedSVG"
                            layout="fullWidth"
                        ></StaticImage>
                    </div>
                    <div className="slide">
                        <StaticImage
                            src="../../images/lapinoz.png"
                            alt="eggs"
                            className="hero-img"
                            placeholder="tracedSVG"
                            layout="fullWidth"
                        ></StaticImage>
                    </div>
                    <div className="slide">
                        <StaticImage
                            src="../../images/mcd.png"
                            alt="eggs"
                            className="hero-img"
                            placeholder="tracedSVG"
                            layout="fullWidth"
                        ></StaticImage>
                    </div>
                    <div className="slide">
                        <StaticImage
                            src="../../images/Subwaylogo.png"
                            alt="eggs"
                            className="hero-img"
                            placeholder="tracedSVG"
                            layout="fullWidth"
                        ></StaticImage>
                    </div>
                </div>
            </div>
        </Section>
    );
}

export default TopBrand;
