import React from "react";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";
import { BsStar, BsClock } from "react-icons/bs";

const Section = styled.section`
    .img {
        width: 125vw;
    }
    .main-div {
        display: flex;
    }
    .link {
        text-decoration: none;
        color: "black";
        margin: 8px 2px;
    }
    .details {
        padding: 1% 4%;
    }
`;
const Button = styled.button`
    cursor: pointer;
`;
function RecipieDetails({
    title,
    pathToImage,
    description,
    price,
    rating,
    cookTime,
    tags,
    tools,
}: any) {
    return (
        <Section>
            <h1>{title}</h1>
            <div className="main-div">
                <div className="img">
                    <GatsbyImage image={pathToImage} alt={title} />
                </div>
                <div className="details">
                    <h1>{title}</h1>
                    <p>{description}</p>
                    <p>₹ {price}</p>
                    <p>
                        {rating}
                        <BsStar />
                    </p>
                    <p>
                        {cookTime}
                        <BsClock />
                    </p>
                    {tags?.map((tag: any) => (
                        <Link to={`/tags/${tag}`} key={tag} className="link">
                            <Button>{tag}</Button>
                        </Link>
                    ))}
                    <h4>Instruction</h4>
                    {tools?.map((tool: any) => (
                        <p>{tool}</p>
                    ))}
                </div>
            </div>
        </Section>
    );
}

export default RecipieDetails;
