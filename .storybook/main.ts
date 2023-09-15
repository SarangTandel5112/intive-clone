// .storybook/main.js or .storybook/main.ts
module.exports = {
    // Update the path to your stories as needed
    stories: ["../src/**/*.stories.tsx"],

    addons: ["@storybook/addon-actions", "@storybook/addon-links"],

    webpackFinal: async (config) => {
        config.module.rules.push({
            test: /\.(ts|tsx)$/,
            use: [
                {
                    loader: require.resolve("ts-loader"), // or 'awesome-typescript-loader' for TypeScript
                },
            ],
        });
        config.resolve.extensions.push(".ts", ".tsx");
        return config;
    },

    framework: {
        name: "@storybook/react-webpack5",
        options: {}
    },

    docs: {
        autodocs: true
    }
};
