import React from "react";
// import { Button } from "react-bootstrap";

import { Button } from "./Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Button",
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: "Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Button",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "Button",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "Button",
};

export const RoundFilledWithText = Template.bind({});
RoundFilledWithText.args = {
  backgroundColor: "#6801d6",
  label: "Submit",
  color: "white",
  borderSize: "2px",
};

export const RoundOutlineWithText = Template.bind({});
RoundOutlineWithText.args = {
  label: "Cancel",
};

export const FlatOutlineWithText = Template.bind({});
FlatOutlineWithText.args = {
  flatButton: true,
  label: "Button",
};

export const FlatFilledWithText = Template.bind({});
FlatFilledWithText.args = {
  flatButton: true,
  backgroundColor: "#6801d6",
  label: "Button",
  color: "white",
  borderSize: "2px",
};
// const Template = (args) => {
//   return (
//     <>
//       <h6>Default Button.</h6>
//       <Button>Submit</Button>
//       <br />
//       <h6>Round Submit Button.</h6>
//       <Button
//         style={{
//           borderRadius: "20px",
//           backgroundColor: "#6801d6",
//           color: "white",
//           borderColor: "#6801d6",
//         }}
//       >
//         Submit
//       </Button>
//       <br />
//       <h6>Round Cancel Button.</h6>
//       <Button
//         style={{
//           borderRadius: "20px",
//           backgroundColor: "white",
//           color: "black",
//           borderColor: "black",
//         }}
//       >
//         Cancel
//       </Button>
//       <br />
//     </>
//   );
// };

// export const button = Template.bind({});
// button.args = {};
