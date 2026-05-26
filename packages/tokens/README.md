# @pine-ui/tokens

Design tokens for Pine UI. Includes colors, spacing, typography, and CSS variables.

## Installation

```bash
pnpm install @pine-ui/tokens
```

## Usage

### JavaScript/TypeScript

```tsx
import { colors, spacing, typography } from '@pine-ui/tokens'

console.log(colors.brand) // Primary brand color
console.log(spacing.md)   // Medium spacing unit
```

### CSS Variables

Import the CSS file to use design tokens as CSS variables:

```tsx
import '@pine-ui/tokens/css'
```

Then use in your CSS:

```css
.button {
  color: var(--color-brand);
  padding: var(--spacing-md);
  font-size: var(--font-size-base);
}
```

## Available Tokens

- **Colors** - Brand, surface, text, borders
- **Spacing** - From xs to 2xl
- **Typography** - Font sizes, weights, line heights
- **Border Radius** - Predefined radius values
- **Shadows** - Elevation shadows

## License

MIT © 2026 Pine UI
