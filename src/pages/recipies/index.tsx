import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "../../components/Layout/Layout";
import AllRecipies from "../../components/AllRecipies/AllRecipies";

const IndexPage: React.FC<PageProps> = () => {
    return (
        <Layout>
            <AllRecipies />
        </Layout>
    );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
