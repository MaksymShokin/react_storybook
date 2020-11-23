import React from 'react';
import Button from './Button';
import Center from '../Decorators/Center/Center';
import { action, actions } from '@storybook/addon-actions';

export default {
  title: 'form/Button',
  component: Button,
  args: {
    children: 'Button'
  },
  // default props
  decorators: [story => <Center>{story()}</Center>]
};

export const Primary = () => (
  // single event
  <Button onClick={action('Click')} variant='primary'>
    Primary
  </Button>
);

export const Secondary = () => (
  // multiple event
  <Button variant='secondary' {...actions('onClick', 'onMouseOver')}>
    Secondary
  </Button>
);
export const Success = () => <Button variant='success'>Success</Button>;
export const Danger = () => <Button variant='danger'>Danger</Button>;

// Args mechanism

const Template = args => <Button {...args} />;

export const PrimaryA = Template.bind({});
PrimaryA.args = {
  variant: 'primary'
  // children: 'Primary Args'
};

export const LongPrimaryA = Template.bind({});
LongPrimaryA.args = {
  ...PrimaryA.args,
  children: 'Long Primary Args'
};

export const SecondaryA = Template.bind({});
SecondaryA.args = {
  variant: 'secondary',
  children: 'Secondary Args'
};
