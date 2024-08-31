import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import AccountConnection from ".";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/AccountConnection",
  component: AccountConnection,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof AccountConnection>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    title: "Example App",
    accountName: "Account Name",
  },
};
