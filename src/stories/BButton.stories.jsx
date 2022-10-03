import React from "react";
import BButton from "./BButton";

// export default {
//   title: "Example/BButton",
//   component: Button,
//   argTypes: {},
// };

// const Template = (args) => (
//   <Button style={{ borderRadius: "20px" }} {...args}>
//     Submit
//   </Button>
// );

// export const Primary = Template.bind({});
// Primary.args = {
//   variant: "primary",
// };

// export const outline = Template.bind({});
// outline.args = {
//   variant: "outline-dark",
// };

export default {
  title: "Example/BButton",
  component: BButton,
  argTypes: {
    background: { control: "color" },
    color: { control: "color" },
    onClick: { action: "clicked" },
  },
};

const Template = (args) => (
  <BButton style={{ borderRadius: "20px" }} {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  variant: "primary",
  children: "Submit",
};

export const CustomColor = Template.bind({});
CustomColor.args = {
  background: "pink",
  color: "red",
  children: "Cancel",
};
