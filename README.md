# Pine UI

A modern React component library with design tokens, built for scalability and accessibility.

## Packages

- **[@pine-ui/tokens](./packages/tokens)** - Design tokens (colors, spacing, typography)
- **[@pine-ui/core](./packages/core)** - React components library

## Installation

```bash
pnpm install @pine-ui/core @pine-ui/tokens
```

## Usage

### Components

```tsx
import { Button } from '@pine-ui/core'

export default function App() {
  return <Button variant="primary">Click me</Button>
}
```

### Design Tokens

```tsx
import { colors, spacing, typography } from '@pine-ui/tokens'
import '@pine-ui/tokens/css' // Import CSS variables
```

## License

MIT © 2026 Pine UI
