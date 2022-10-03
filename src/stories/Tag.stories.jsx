import React from "react";
import { storiesOf } from "@storybook/react";
import Tag from "./Tag";

// storiesOf("Custom/Tag", module)
//   .add("shape", () => (
//     <Tag shape="bluntEdged" size="small" color="teal" kind="outlined">
//       bluntEdged small outlined
//     </Tag>
//   ))
//   .add("kind", () => (
//     <Tag kind="outlined" color="teal">
//       outlined
//     </Tag>
//   ))
//   .add("size", () => (
//     <Tag size="small" color="teal">
//       small
//     </Tag>
//   ));

export default {
  title: "Custome/Tag",
  component: Tag,
  parameters: {
    layout: "fullscreen",
  },
};

const Template = (args) => <Tag {...args}> Demo </Tag>;
export const Shape = Template.bind({});
Shape.args = {
  shape: "bluntEdged",
  size: "small",
  color: "teal",
  kind: "outlined",
};
