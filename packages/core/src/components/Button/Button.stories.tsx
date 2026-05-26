import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'ghost', 'danger', 'link'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    loading:   { control: 'boolean' },
    disabled:  { control: 'boolean' },
    fullWidth: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: { variant: 'primary', children: 'Salvar alterações' },
}

export const Secondary: Story = {
  args: { variant: 'secondary', children: 'Cancelar' },
}

export const Ghost: Story = {
  args: { variant: 'ghost', children: 'Ver detalhes' },
}

export const Danger: Story = {
  args: { variant: 'danger', children: 'Excluir conta' },
}

export const Loading: Story = {
  args: { variant: 'primary', loading: true, children: 'Salvando...' },
}

export const Disabled: Story = {
  args: { variant: 'primary', disabled: true, children: 'Indisponível' },
}

export const AllVariants: Story = {
  name: '↳ Todas as variantes',
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'center' }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="link">Link</Button>
    </div>
  ),
}

export const AllSizes: Story = {
  name: '↳ Todos os tamanhos',
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'center' }}>
      <Button size="small">Small</Button>
      <Button size="medium">Medium</Button>
      <Button size="large">Large</Button>
    </div>
  ),
}