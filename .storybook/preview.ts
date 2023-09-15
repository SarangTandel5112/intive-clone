import type { Preview } from "@storybook/react";
import { Decorator } from "@storybook/react";
import Center from "../src/components/Center/Center";

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: "^on[A-Z].*" },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    },
};

// export const decorators = [
//     (Story: any) => (
//         <Center>
//             <Story />
//         </Center>
//     ),
// ];

export default preview;
