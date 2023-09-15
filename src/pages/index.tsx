import * as React from "react";
import { Link, type HeadFC, type PageProps } from "gatsby";
import Layout from "../components/Layout/Layout";
import MainImage from "../components/FrontImage/MainImage";
import TopBrand from "../components/TopBrand/TopBrand";

const IndexPage: React.FC<PageProps> = () => {
    return (
        <Layout>
            <MainImage />
            <TopBrand />
        </Layout>
    );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
