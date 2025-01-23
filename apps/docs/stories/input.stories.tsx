import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "@acme/ui/components/input";

const meta: Meta<typeof Input> = {
  component: Input,
};

export default meta;

type Story = StoryObj<typeof Input>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: (props) => (
    <Input {...props} />
  ),
  name: "Input",
  args: {
    type: "email",
    placeholder: "Email",
  },
}