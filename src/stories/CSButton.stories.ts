import type { Meta, StoryObj } from '@storybook/vue3'

import { CSButton } from 'somus-ui-design-system'

// https://storybook.js.org/docs/7.0/vue/api/csf
const meta = {
  component: CSButton,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['small', 'medium', 'large', 'x-large'] }
  }
} satisfies Meta<typeof CSButton>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    text: 'Button'
  }
}
