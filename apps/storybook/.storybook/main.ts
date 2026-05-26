import type { StorybookConfig } from '@storybook/react-vite'
import path from 'path'

const coreSrc = path.resolve(__dirname, '../../../packages/core/src')

const config: StorybookConfig = {
  stories: [
    `${coreSrc}/**/*.stories.tsx`,
    `${coreSrc}/**/*.stories.ts`,
  ],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@storybook/addon-themes',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
}

export default config