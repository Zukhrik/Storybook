import {DeleteOutlined, HeartOutlined, CalculatorOutlined} from '@ant-design/icons';
import type {Meta, StoryObj} from '@storybook/react';
import {Button} from 'antd';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    controls: {
      expanded: true
    },
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      description: 'Set Button Children',
      type: 'string',
      control: 'text',
      defaultValue: 'Click Me'
    },
    type: {
      description: 'Type of button',
      type: 'string',
      defaultValue: 'default',
      options: ['default', 'primary', 'link', 'text', 'dasher'],
      control: 'select'
    },
    loading: {
      description: 'View Button on loading',
      type: 'boolean',
      defaultValue: true,
      control: 'boolean'
    },
    disabled: {
      description: 'View Button on disabled',
      type: 'boolean',
      defaultValue: true,
      control: 'boolean'
    },
    size: {
      description: 'Type of Button size',
      type: 'string',
      defaultValue: 'middle',
      options: ['small', 'middle', 'large'],
      control: 'radio'
    },
    shape: {
      description: 'Can be set button shape',
      type: 'string',
      defaultValue: 'default',
      options: ['default', 'circle', 'square'],
      control: 'radio'
    },
    icon: {
      description: 'View of Button on it has Icon',
      options: [undefined, "DeleteOutlined", "HeartOutlined", "CalculatorOutlined"],
      mapping: { DeleteOutlined: <DeleteOutlined/>, HeartOutlined: <HeartOutlined/>, CalculatorOutlined: <CalculatorOutlined />},
      control: 'select'
    }
  }
} satisfies Meta<typeof Button>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const PlayingWithButton: Story = {
  args: {
    children: 'Click me',
    type: 'primary',
    size: 'large',
    loading: false,
    disabled: false
  }
};

export default meta;
type Story = StoryObj<typeof meta>;