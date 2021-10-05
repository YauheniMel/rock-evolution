import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ButtonInfo } from "./ButtonInfo";

export default {
  title: 'ButtonInfo',
  component: ButtonInfo,
} as ComponentMeta<typeof ButtonInfo>;

const Template: ComponentStory<typeof ButtonInfo> = (args) => <ButtonInfo {...args} />;

export const ButtonInfoStory = Template.bind({});
ButtonInfoStory.args = {
  onClick: () => alert('clicked'),
  content: 'Show more'
};
