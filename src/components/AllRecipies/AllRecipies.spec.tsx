import React from "react";
import AllRecipies from "./AllRecipies";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

jest.mock("gatsby", () => ({
    Link: ({ to, children }: any) => <a href={to}>{children}</a>,
    useStaticQuery: jest.fn().mockReturnValue({
        allContentfulReceipe: {
            nodes: [
                {
                    id: "cc99c489-82a7-5a76-8e93-c896dd23ea8e",
                    title: "dhosa",
                    image: {
                        gatsbyImageData: {
                            images: {
                                sources: [
                                    {
                                        srcSet: "https://images.ctfassets.net/weogvq1s6eve/5kjxd8jpK5nLBSgYmcqRB8/bf4beed645b43557016f599feeb1bce7/dhosa.jpg?w=2064&h=1376&q=50&fm=webp 2064w,\nhttps://images.ctfassets.net/weogvq1s6eve/5kjxd8jpK5nLBSgYmcqRB8/bf4beed645b43557016f599feeb1bce7/dhosa.jpg?w=4000&h=2666&q=50&fm=webp 4000w,\nhttps://images.ctfassets.net/weogvq1s6eve/5kjxd8jpK5nLBSgYmcqRB8/bf4beed645b43557016f599feeb1bce7/dhosa.jpg?w=4000&h=2666&q=50&fm=webp 4000w",
                                        sizes: "(min-width: 8256px) 8256px, 100vw",
                                        type: "image/webp",
                                    },
                                ],
                                fallback: {
                                    src: "https://images.ctfassets.net/weogvq1s6eve/5kjxd8jpK5nLBSgYmcqRB8/bf4beed645b43557016f599feeb1bce7/dhosa.jpg?w=2064&h=1376&fl=progressive&q=50&fm=jpg",
                                    srcSet: "https://images.ctfassets.net/weogvq1s6eve/5kjxd8jpK5nLBSgYmcqRB8/bf4beed645b43557016f599feeb1bce7/dhosa.jpg?w=2064&h=1376&fl=progressive&q=50&fm=jpg 2064w,\nhttps://images.ctfassets.net/weogvq1s6eve/5kjxd8jpK5nLBSgYmcqRB8/bf4beed645b43557016f599feeb1bce7/dhosa.jpg?w=4000&h=2666&fl=progressive&q=50&fm=jpg 4000w,\nhttps://images.ctfassets.net/weogvq1s6eve/5kjxd8jpK5nLBSgYmcqRB8/bf4beed645b43557016f599feeb1bce7/dhosa.jpg?w=4000&h=2666&fl=progressive&q=50&fm=jpg 4000w",
                                    sizes: "(min-width: 8256px) 8256px, 100vw",
                                },
                            },
                            layout: "constrained",
                            backgroundColor: "#781808",
                            width: 8256,
                            height: 5504,
                        },
                    },
                    price: 150,
                    rating: 4.2,
                },
                {
                    id: "d1612062-2598-58cd-977c-d3f1fe5a8db2",
                    title: "pasta",
                    image: {
                        gatsbyImageData: {
                            images: {
                                sources: [
                                    {
                                        srcSet: "https://images.ctfassets.net/weogvq1s6eve/WU0DrlwSQr5B7sNLDR16C/ce9b95727856f8fe8b8f9d9a0b4e39fd/ben-lei-flFd8L7_B3g-unsplash.jpg?w=677&h=451&q=50&fm=webp 677w,\nhttps://images.ctfassets.net/weogvq1s6eve/WU0DrlwSQr5B7sNLDR16C/ce9b95727856f8fe8b8f9d9a0b4e39fd/ben-lei-flFd8L7_B3g-unsplash.jpg?w=1353&h=902&q=50&fm=webp 1353w,\nhttps://images.ctfassets.net/weogvq1s6eve/WU0DrlwSQr5B7sNLDR16C/ce9b95727856f8fe8b8f9d9a0b4e39fd/ben-lei-flFd8L7_B3g-unsplash.jpg?w=2706&h=1804&q=50&fm=webp 2706w",
                                        sizes: "(min-width: 2706px) 2706px, 100vw",
                                        type: "image/webp",
                                    },
                                ],
                                fallback: {
                                    src: "https://images.ctfassets.net/weogvq1s6eve/WU0DrlwSQr5B7sNLDR16C/ce9b95727856f8fe8b8f9d9a0b4e39fd/ben-lei-flFd8L7_B3g-unsplash.jpg?w=2706&h=1804&fl=progressive&q=50&fm=jpg",
                                    srcSet: "https://images.ctfassets.net/weogvq1s6eve/WU0DrlwSQr5B7sNLDR16C/ce9b95727856f8fe8b8f9d9a0b4e39fd/ben-lei-flFd8L7_B3g-unsplash.jpg?w=677&h=451&fl=progressive&q=50&fm=jpg 677w,\nhttps://images.ctfassets.net/weogvq1s6eve/WU0DrlwSQr5B7sNLDR16C/ce9b95727856f8fe8b8f9d9a0b4e39fd/ben-lei-flFd8L7_B3g-unsplash.jpg?w=1353&h=902&fl=progressive&q=50&fm=jpg 1353w,\nhttps://images.ctfassets.net/weogvq1s6eve/WU0DrlwSQr5B7sNLDR16C/ce9b95727856f8fe8b8f9d9a0b4e39fd/ben-lei-flFd8L7_B3g-unsplash.jpg?w=2706&h=1804&fl=progressive&q=50&fm=jpg 2706w",
                                    sizes: "(min-width: 2706px) 2706px, 100vw",
                                },
                            },
                            layout: "constrained",
                            backgroundColor: "#d8e8f8",
                            width: 2706,
                            height: 1804,
                        },
                    },
                    price: 180,
                    rating: 4.9,
                },
                {
                    id: "f152f58d-aee8-5163-a69e-d6d45b3339a1",
                    title: "pizza",
                    image: {
                        gatsbyImageData: {
                            images: {
                                sources: [
                                    {
                                        srcSet: "https://images.ctfassets.net/weogvq1s6eve/2JF8oukAZVFfM0x8GJ4RKg/eeb5f16d1836d6756048539d3d30366f/pizza.jpeg?w=300&h=200&q=50&fm=webp 300w,\nhttps://images.ctfassets.net/weogvq1s6eve/2JF8oukAZVFfM0x8GJ4RKg/eeb5f16d1836d6756048539d3d30366f/pizza.jpeg?w=600&h=400&q=50&fm=webp 600w,\nhttps://images.ctfassets.net/weogvq1s6eve/2JF8oukAZVFfM0x8GJ4RKg/eeb5f16d1836d6756048539d3d30366f/pizza.jpeg?w=1200&h=800&q=50&fm=webp 1200w",
                                        sizes: "(min-width: 1200px) 1200px, 100vw",
                                        type: "image/webp",
                                    },
                                ],
                                fallback: {
                                    src: "https://images.ctfassets.net/weogvq1s6eve/2JF8oukAZVFfM0x8GJ4RKg/eeb5f16d1836d6756048539d3d30366f/pizza.jpeg?w=1200&h=800&fl=progressive&q=50&fm=jpg",
                                    srcSet: "https://images.ctfassets.net/weogvq1s6eve/2JF8oukAZVFfM0x8GJ4RKg/eeb5f16d1836d6756048539d3d30366f/pizza.jpeg?w=300&h=200&fl=progressive&q=50&fm=jpg 300w,\nhttps://images.ctfassets.net/weogvq1s6eve/2JF8oukAZVFfM0x8GJ4RKg/eeb5f16d1836d6756048539d3d30366f/pizza.jpeg?w=600&h=400&fl=progressive&q=50&fm=jpg 600w,\nhttps://images.ctfassets.net/weogvq1s6eve/2JF8oukAZVFfM0x8GJ4RKg/eeb5f16d1836d6756048539d3d30366f/pizza.jpeg?w=1200&h=800&fl=progressive&q=50&fm=jpg 1200w",
                                    sizes: "(min-width: 1200px) 1200px, 100vw",
                                },
                            },
                            layout: "constrained",
                            backgroundColor: "#b8b8b8",
                            width: 1200,
                            height: 800,
                        },
                    },
                    price: 145,
                    rating: 4.5,
                },
                {
                    id: "7a361109-961f-56da-a847-332f36defa5b",
                    title: "sandwich",
                    image: {
                        gatsbyImageData: {
                            images: {
                                sources: [
                                    {
                                        srcSet: "https://images.ctfassets.net/weogvq1s6eve/5fJiCyOriqVw43I7VdAbPZ/f5e0c950701977c7cbf3a450e32067cc/sandwich.png?w=300&h=200&q=50&fm=webp 300w,\nhttps://images.ctfassets.net/weogvq1s6eve/5fJiCyOriqVw43I7VdAbPZ/f5e0c950701977c7cbf3a450e32067cc/sandwich.png?w=600&h=400&q=50&fm=webp 600w,\nhttps://images.ctfassets.net/weogvq1s6eve/5fJiCyOriqVw43I7VdAbPZ/f5e0c950701977c7cbf3a450e32067cc/sandwich.png?w=1200&h=800&q=50&fm=webp 1200w",
                                        sizes: "(min-width: 1200px) 1200px, 100vw",
                                        type: "image/webp",
                                    },
                                ],
                                fallback: {
                                    src: "https://images.ctfassets.net/weogvq1s6eve/5fJiCyOriqVw43I7VdAbPZ/f5e0c950701977c7cbf3a450e32067cc/sandwich.png?w=1200&h=800&q=50&fm=png",
                                    srcSet: "https://images.ctfassets.net/weogvq1s6eve/5fJiCyOriqVw43I7VdAbPZ/f5e0c950701977c7cbf3a450e32067cc/sandwich.png?w=300&h=200&q=50&fm=png 300w,\nhttps://images.ctfassets.net/weogvq1s6eve/5fJiCyOriqVw43I7VdAbPZ/f5e0c950701977c7cbf3a450e32067cc/sandwich.png?w=600&h=400&q=50&fm=png 600w,\nhttps://images.ctfassets.net/weogvq1s6eve/5fJiCyOriqVw43I7VdAbPZ/f5e0c950701977c7cbf3a450e32067cc/sandwich.png?w=1200&h=800&q=50&fm=png 1200w",
                                    sizes: "(min-width: 1200px) 1200px, 100vw",
                                },
                            },
                            layout: "constrained",
                            backgroundColor: "#f8f8f8",
                            width: 1200,
                            height: 800,
                        },
                    },
                    price: 120,
                    rating: 4.6,
                },
            ],
        },
    }),
    graphql: jest.fn(),
}));

describe("AllRecipies", () => {
    it("should have name", () => {
        render(<AllRecipies />);
        const nameAttribute = screen.getByText("pasta");
        expect(nameAttribute).toBeInTheDocument();
    });
    it("should have name", () => {
        render(<AllRecipies />);
        const nameAttribute = screen.getByText("₹ 150");
        expect(nameAttribute).toBeInTheDocument();
    });
    it("checks the presence and alt text of the image", () => {
        render(<AllRecipies />);
        const imageElement = screen.getByAltText("dhosa");
        expect(imageElement).toBeInTheDocument();
    });
});
