import React from "react";
import Badge from "../components/Badge/Badge"

export default {
  title: "components/Badge",
  component: Badge,
  parameters: {
    layout: "fullscreen",
  },
};

const Template = (args) => <Badge {...args}>{args.text}</Badge>;

export const MediumBadge = Template.bind({});
MediumBadge.args = {
  text: "Misplaced",
  backgroundcolor: "#ffa553",
  shape: "roundedEdge",
  fontSize: "md",
};

export const SmallBadge = Template.bind({});
SmallBadge.args = {
  text: "modified",
  backgroundcolor: "#53d7ff",
  shape: "rounded",
  fontSize: "sm",
  padding: "0px 10px",
};

export const LargeBadge = Template.bind({});
LargeBadge.args = {
  text: "Untagged",
  backgroundcolor: "#ffa553",
  shape: "roundedEdge",
  fontSize: "lg",
};

export const RightArrowBadge = Template.bind({});
RightArrowBadge.args = {};
