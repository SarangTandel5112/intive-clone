import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";
import { BsStar } from "react-icons/bs"

const Section = styled.section`
    padding: 2% 4%;
    display: flex;
    justify-content: space-between;
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
    }

    .desc-div{
      display: flex;
      justify-content: space-between;
    }
`;

const Label = styled.p`
    font-size: 1.2rem;
`;

const query = graphql`
    {
        allContentfulReceipe(sort: { title: ASC }) {
            nodes {
                id
                title
                image {
                    gatsbyImageData(
                        layout: CONSTRAINED
                        placeholder: TRACED_SVG
                        aspectRatio: 1.5
                    )
                }
                price
                rating
            }
        }
    }
`;

function AllRecipies() {

  const data = useStaticQuery(query);
  const recepie = data.allContentfulReceipe.nodes;

  return (
    <Section>
      {recepie.map((singleRecepie: any, index: any) => (
        <Link
          to={`${singleRecepie?.title}`}
          key={index}
          className="link"
        >
          <div data-testid={`link-${singleRecepie?.title}`} className="img-div">
            <GatsbyImage
              className="img"
              image={singleRecepie?.image?.gatsbyImageData}
              alt={singleRecepie?.title}
            />
            <div className="desc-div">
              <Label className="name">{singleRecepie?.title}</Label>
              <Label className="name">{singleRecepie?.rating} <BsStar /></Label>
              <Label className="name">₹ {singleRecepie?.price}</Label>
            </div>
          </div>
        </Link>
      ))}
    </Section>
  );
}

export default AllRecipies;
