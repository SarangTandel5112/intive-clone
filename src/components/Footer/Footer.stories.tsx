import React from "react";
import FooterDiv from "./Footer";
import Center from "../Center/Center";

export default {
    title: "Footer",
    component: FooterDiv,
    decorators: [(Story: any) => <Center>{Story()}</Center>],
};

export const Default = () => <FooterDiv />;
