import * as path from "path";

exports.createPages = async ({ actions, graphql, reporter }: any) => {
    const { createPage } = actions;
    const result: any = await graphql(`
        query MyQuery {
            allContentfulReceipe {
                nodes {
                    content {
                        tags
                    }
                }
            }
        }
    `);

    result?.data?.allContentfulReceipe?.nodes?.forEach((recipe: any) => {
        recipe.content.tags.forEach((tag: any) => {
            createPage({
                path: `/tags/${tag}`,
                component: path.resolve(`./src/templates/TagTemplate.tsx`),
                context: {
                    tag,
                },
            });
        });
    });
};
