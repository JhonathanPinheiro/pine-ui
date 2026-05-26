import type { Preview } from '@storybook/react'
import '../src/styles.css'

const preview: Preview = {
  parameters: {
    layout: 'centered',
  },
  globalTypes: {
    theme: {
      name: 'Theme',
      defaultValue: 'light',
      toolbar: {
        icon: 'circlehollow',
        items: [
          { value: 'light', title: 'Light', icon: 'sun'  },
          { value: 'dark',  title: 'Dark',  icon: 'moon' },
        ],
      },
    },
  },
  decorators: [
    (Story, context) => {
      const theme = context.globals.theme ?? 'light'
      document.documentElement.setAttribute('data-theme', theme)
      document.body.style.background =
        theme === 'dark' ? '#0D0D0C' : '#F5F5F3'
      return Story()
    },
  ],
}

export default preview