import { Link, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import Layout from "../components/Layout/Layout";
import styled from "styled-components";
import { BsStar } from "react-icons/bs";

const Section = styled.section`
    display: flex;
    text-decoration: none;
    .img-div {
        margin: 1%;
    }

    .img {
        width: 20vw;
        height: 15vw;
    }

    .link {
        text-decoration: none;
        margin: 1% 2%;
    }

    .desc-div {
        display: flex;
        justify-content: space-between;
    }
`;

const Label = styled.p`
    font-size: 1.2rem;
`;
export default function TagTemplate({ data, pageContext }: any) {
    const {
        allContentfulReceipe: { nodes },
    } = data;

    return (
        <Layout>
            <h1>{pageContext?.tag}</h1>
            <Section>
                {nodes.map((singleRecepie: any, index: any) => (
                    <Link
                        to={`/recipies/${singleRecepie?.title}`}
                        key={index}
                        className="link"
                    >
                        <div className="img-div">
                            <GatsbyImage
                                className="img"
                                image={singleRecepie?.image?.gatsbyImageData}
                                alt={singleRecepie?.title}
                            />
                            <div className="desc-div">
                                <Label className="name">
                                    {singleRecepie?.title}
                                </Label>
                                <Label className="name">
                                    {singleRecepie?.rating} <BsStar />
                                </Label>
                                <Label className="name">
                                    ₹ {singleRecepie?.price}
                                </Label>
                            </div>
                        </div>
                    </Link>
                ))}
            </Section>
        </Layout>
    );
}

export const query = graphql`
    query GetReceipeByTag($tag: String) {
        allContentfulReceipe(
            sort: { title: ASC }
            filter: { content: { tags: { eq: $tag } } }
        ) {
            nodes {
                title
                price
                rating
                image {
                    gatsbyImageData
                }
            }
        }
    }
`;
