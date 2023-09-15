import React from "react";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import Layout from "../../components/Layout/Layout";
import RecipieDetails from "../../components/RecipieDetails/RecipieDetails";

function RecepieTemplate({ data }: any) {
    const {
        title,
        cookTime,
        description: { description },
        image,
        content: { tags, tools },
        rating,
        price,
    } = data?.contentfulReceipe;
    const pathToImage: any = getImage(image);

    return (
        <Layout>
            <RecipieDetails
                title={title}
                pathToImage={pathToImage}
                description={description}
                price={price}
                rating={rating}
                cookTime={cookTime}
                tags={tags}
                tools={tools}
            />
        </Layout>
    );
}

export const query = graphql`
    query getReceipeDetails($title: String) {
        contentfulReceipe(title: { eq: $title }) {
            title
            cookTime
            description {
                description
            }
            image {
                gatsbyImageData(layout: FULL_WIDTH)
            }
            content {
                tags
                tools
            }
            rating
            price
        }
    }
`;

export default RecepieTemplate;
