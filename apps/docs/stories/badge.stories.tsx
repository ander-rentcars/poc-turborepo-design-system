import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "@acme/ui/components/badge";

const meta: Meta<typeof Badge> = {
  component: Badge,
  argTypes: {
    variant: {
      control: { type: "radio" },
      options: ["default", "secondary", "outline", "destructive"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Badge>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */

export const Primary: Story = {
  render: (props) => (
    <Badge {...props}>Hello</Badge>
  ),
  name: "Badge",
  args: {
    children: "Hello",
    variant: "default",
  },
};