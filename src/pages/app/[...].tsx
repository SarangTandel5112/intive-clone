import React from "react";
import { Router } from "@reach/router";
import Layout from "../../components/Layout/Layout";
import FooterDiv from "../../components/Footer/Footer";

const TestRouter = () => <div>Router</div>;

const App = () => {
    return (
        <Layout>
            <Router basepath="/app">
                <FooterDiv path="/profile" />
                <TestRouter path="/details" />
            </Router>
        </Layout>
    );
};

export default App;
