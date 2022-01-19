import React from 'react';

import { GoBackButton } from './GoBackButton';

export default {
  title: 'Example/GoBackButton',
  component: GoBackButton,

  argTypes: {},
  decorators: [
    Story => (
      <div style={{ backgroundColor: 'black' }}>
        <Story />
      </div>
    )
  ]
};

const Template = args => <GoBackButton {...args} />;

export const Default = Template.bind({});
