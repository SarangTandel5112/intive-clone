import { Link, graphql } from "gatsby";
import React from "react";
import setupTags from "../utils/setupTags";
import Layout from "../components/Layout/Layout";

function Tags({ data }: any) {
    const {
        allContentfulReceipe: { nodes: tags },
    } = data;
    const newTags = setupTags(tags);

    return (
        <Layout>
            <section
                className="tags-page"
                style={{ display: "flex", justifyContent: "left" }}
            >
                {newTags.map((tag, index) => {
                    const [text, value]: any = tag;
                    return (
                        <Link
                            to={`/tags/${text}`}
                            key={index}
                            style={{ textDecoration: "none", color: "black" }}
                        >
                            <button
                                style={{
                                    cursor: "pointer",
                                    display: "flex",
                                    margin: "5%",
                                }}
                            >
                                <h5>{text} </h5>
                                <span
                                    style={{
                                        backgroundColor: "black",
                                        color: "white",
                                        padding: "2px 4px",
                                        borderRadius: "100%",
                                    }}
                                >
                                    {value}
                                </span>
                            </button>
                        </Link>
                    );
                })}
            </section>
        </Layout>
    );
}

export const query = graphql`
    query MyQuery {
        allContentfulReceipe {
            nodes {
                content {
                    tags
                }
            }
        }
    }
`;

export default Tags;
