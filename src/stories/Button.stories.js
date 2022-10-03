import React from "react";
import { storiesOf } from "@storybook/react";
import Button from "../components/Button";

storiesOf("components/Button", module)
  .add("General", () => <Button> Add Button </Button>)
  .add("OutlineShape", () => (
    <>
      <Button kind="filled" borderRadius="20px">
        Submit
      </Button>
      <Button label="Add" />
    </>
  ))
  .add("FilledShape", () => (
    <>
      <Button
        kind="filled"
        borderRadius="20px"
        backgroundColor="#6801d6"
        color="white"
      >
        Submit
      </Button>
      <Button label="Add" backgroundColor="#6801d6" color="white">
        Add
      </Button>
    </>
  ))
  .add("OutlineSize", () => (
    <>
      <Button label="Save" shape="bluntEdged" borderRadius="20px" size="xs" />
      <Button label="Save" shape="bluntEdged" borderRadius="20px" size="sm" />
      <Button label="Save" shape="bluntEdged" borderRadius="20px" size="md" />
      <Button label="Save" shape="bluntEdged" borderRadius="20px" size="lg" />
    </>
  ))
  .add("FilledSize", () => (
    <>
      <Button
        label="Save"
        shape="bluntEdged"
        borderRadius="20px"
        size="xs"
        backgroundColor="#6801d6"
        color="white"
      />
      <Button
        label="Save"
        shape="bluntEdged"
        borderRadius="20px"
        size="sm"
        backgroundColor="#6801d6"
        color="white"
      />
      <Button
        label="Save"
        shape="bluntEdged"
        borderRadius="20px"
        size="md"
        backgroundColor="#6801d6"
        color="white"
      />
      <Button
        label="Save"
        shape="bluntEdged"
        borderRadius="20px"
        backgroundColor="#6801d6"
        color="white"
        size="lg"
      />
    </>
  ));
