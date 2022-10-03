import React from "react";
import Badge from "../components/Badge";

export default {
  title: "Badge",
  component: Badge,
  parameters: {
    layout: "fullscreen",
  },
};

const Template = (args) => <Badge {...args}>{args.text}</Badge>;

export const MediumBadge = Template.bind({});
MediumBadge.args = {
  text: "Misplaced",
  backgroundColor: "#ffa553",
  shape: "roundedEdge",
  fontSize: "12px",
};

export const SmallBadge = Template.bind({});
SmallBadge.args = {
  text: "modified",
  backgroundColor: "#53d7ff",
  shape: "rounded",
  fontSize: "12px",
  padding: "0px 10px",
};

export const LargeBadge = Template.bind({});
LargeBadge.args = {
  text: "Untagged",
  backgroundColor: "#ffa553",
  shape: "roundedEdge",
  fontSize: "14px",
};

export const RightArrowBadge = Template.bind({});
RightArrowBadge.args = {};
