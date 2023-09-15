import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
    siteMetadata: {
        title: `intive-clone`,
        siteUrl: `https://www.yourdomain.tld`,
        people: [
            {
                name: "sarang",
                company: "intive",
            },
            {
                name: "test",
            },
        ],
        products: [
            {
                id: 1,
                name: "Product 1",
                description: "Description for Product 1",
                price: 19.99,
                category: "Electronics",
                reviews: [
                    {
                        userId: 101,
                        rating: 4,
                        comment: "Great product!",
                    },
                    {
                        userId: 102,
                        rating: 5,
                        comment: "Excellent quality.",
                    },
                ],
            },
            {
                id: 2,
                name: "Product 2",
                description: "Description for Product 2",
                price: 29.99,
                category: "Clothing",
                reviews: [
                    {
                        userId: 103,
                        rating: 3,
                        comment: "Good fit.",
                    },
                ],
            },
            {
                id: 3,
                name: "Product 3",
                description: "Description for Product 3",
                price: 9.99,
                category: "Books",
                reviews: [],
            },
            {
                id: 4,
                name: "Product 4",
                description: "Description for Product 4",
                price: 49.99,
                category: "Electronics",
                reviews: [
                    {
                        userId: 104,
                        rating: 5,
                        comment: "Awesome features!",
                    },
                ],
            },
            {
                id: 5,
                name: "Product 5",
                description: "Description for Product 5",
                price: 14.99,
                category: "Clothing",
                reviews: [
                    {
                        userId: 105,
                        rating: 4,
                        comment: "Comfortable fabric.",
                    },
                    {
                        userId: 106,
                        rating: 3,
                        comment: "Average quality.",
                    },
                ],
            },
        ],
    },
    // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
    // If you use VSCode you can also use the GraphQL plugin
    // Learn more at: https://gatsby.dev/graphql-typegen
    graphqlTypegen: true,
    plugins: [
        `gatsby-plugin-styled-components`,
        `gatsby-plugin-image`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        {
            resolve: `gatsby-source-contentful`,
            options: {
                spaceId: `weogvq1s6eve`,
                // Learn about environment variables: https://gatsby.dev/env-vars
                accessToken: `StK2DfYhUOV_RuIi8hnIVLsXa1T89hRpy9p74pi7BzI`,
            },
        },
        {
            resolve: `gatsby-plugin-create-client-paths`,
            options: { prefixes: [`/app/*`] },
        },
    ],
    // module: {
    //     rules: [
    //         {
    //             test: /\.(js|jsx)$/,
    //             exclude: /node_modules/,
    //             use: {
    //                 loader: "babel-loader",
    //             },
    //         },
    //     ],
    // },
};

export default config;
