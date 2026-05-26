# @pine-ui/core

React component library for Pine UI. Unstyled, composable components built with TypeScript.

## Installation

```bash
pnpm install @pine-ui/core @pine-ui/tokens react react-dom
```

## Usage

### Button

```tsx
import { Button } from '@pine-ui/core'
import '@pine-ui/tokens/css'

export default function App() {
  return (
    <>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="danger">Delete</Button>
      <Button loading>Loading...</Button>
    </>
  )
}
```

### Props

- `variant` - 'primary' | 'secondary' | 'ghost' | 'danger' | 'link'
- `size` - 'small' | 'medium' | 'large'
- `loading` - Shows loading spinner
- `leftIcon` / `rightIcon` - Icon elements
- `fullWidth` - Stretch to container width
- All standard HTML button attributes

## Styling

Components use CSS variables from `@pine-ui/tokens`. Import the CSS file to apply styling:

```tsx
import '@pine-ui/tokens/css'
```

## License

MIT © 2026 Pine UI
