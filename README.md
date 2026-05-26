<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:085041,50:0F6E56,100:1D9E75&height=180&section=header&text=Pine%20UI&fontSize=64&fontColor=ffffff&fontAlignY=42&desc=Design%20system%20React%20com%20dark%20mode%20nativo%20e%20tokens%20semânticos&descAlignY=62&descSize=15&animation=fadeIn" />

<br/>

[![npm](https://img.shields.io/npm/v/@pine-ui/react?style=flat-square&color=1D9E75&label=%40pine-ui%2Freact)](https://www.npmjs.com/package/@pine-ui/react)
[![npm](https://img.shields.io/npm/v/@pine-ui/tokens?style=flat-square&color=085041&label=%40pine-ui%2Ftokens)](https://www.npmjs.com/package/@pine-ui/tokens)
[![TypeScript](https://img.shields.io/badge/TypeScript-strict-007ACC?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-1D9E75?style=flat-square)](LICENSE)

**Componentes React acessíveis, tipados e com dark mode nativo via CSS Variables.**

[npm — @pine-ui/react](https://www.npmjs.com/package/@pine-ui/react) · [npm — @pine-ui/tokens](https://www.npmjs.com/package/@pine-ui/tokens) · [Reportar bug](https://github.com/jhonathanpinheiro/pine-ui/issues)

</div>

---

## Por que Pine UI?

| | |
|---|---|
| 🌙 **Dark mode nativo** | CSS Variables puras — zero runtime, sem flash de tema |
| 🔒 **TypeScript strict** | Todas as props tipadas, `forwardRef` em todos os componentes |
| ♿ **Acessível por padrão** | `aria-*`, `focus-visible` e navegação por teclado em tudo |
| 🌳 **Tree-shakeable** | Bundle ESM — importe só o que usar |
| 🎨 **Tokens semânticos** | Cores, espaçamentos e tipografia como CSS Variables reutilizáveis |
| 📦 **Monorepo** | Tokens e componentes em pacotes independentes |

---

## Instalação

```bash
# instala os componentes e os tokens
npm install @pine-ui/react @pine-ui/tokens
```

**Adicione os tokens CSS no root do seu projeto:**

```tsx
// app/layout.tsx (Next.js) ou main.tsx (Vite)
import '@pine-ui/tokens/css'
```

---

## Uso rápido

```tsx
import { Button } from '@pine-ui/react'

export function App() {
  return (
    <Button variant="primary" size="md">
      Salvar alterações
    </Button>
  )
}
```

---

## Componentes

### Button

```tsx
import { Button } from '@pine-ui/react'

// Variantes
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="danger">Danger</Button>
<Button variant="link">Link</Button>

// Tamanhos
<Button size="xs" />
<Button size="sm" />
<Button size="md" />  {/* padrão */}
<Button size="lg" />
<Button size="xl" />

// Estados
<Button loading>Salvando...</Button>
<Button disabled>Indisponível</Button>
<Button fullWidth>Criar conta</Button>

// Com ícones
<Button leftIcon={<Icon />}>Novo projeto</Button>
<Button rightIcon={<Icon />}>Continuar</Button>
```

---

## Design Tokens

```tsx
import { colors, spacing, typography } from '@pine-ui/tokens'

// Usando via CSS Variables (recomendado)
import '@pine-ui/tokens/css'
```

```css
.meu-componente {
  background: var(--color-brand);      /* #1D9E75 */
  color:      var(--color-text);
  padding:    var(--radius-md);
  font-family: var(--font-sans);
}
```

### Paleta Pine Green

| Token | Valor | |
|---|---|---|
| `--pine-500` | `#1D9E75` | Brand principal |
| `--pine-600` | `#178A64` | Hover |
| `--pine-700` | `#0F6E56` | Active |
| `--pine-50`  | `#E8F7F2` | Backgrounds sutis |

---

## Dark Mode

Pine UI usa `[data-theme="dark"]` no elemento raiz:

```tsx
// toggle manual
document.documentElement.setAttribute('data-theme', 'dark')
```

```tsx
// com next-themes (Next.js)
import { ThemeProvider } from 'next-themes'

<ThemeProvider attribute="data-theme">
  {children}
</ThemeProvider>
```

Zero JavaScript no runtime — a troca de tema é feita inteiramente via CSS.

---

## Estrutura do monorepo

```
pine-ui/
├── packages/
│   ├── tokens/     # @pine-ui/tokens — design tokens
│   └── core/       # @pine-ui/react  — componentes React
└── apps/
    └── storybook/  # documentação visual
```

---

## Desenvolvimento local

```bash
git clone https://github.com/jhonathanpinheiro/pine-ui
cd pine-ui
pnpm install

pnpm run build      # builda tokens e core
pnpm run storybook  # abre documentação em localhost:6006
```

---

## Roadmap

- [x] Button — 5 variantes, 5 tamanhos, loading, ícones
- [x] Design tokens com dark mode nativo
- [x] Publicação no npm (`@pine-ui/react`, `@pine-ui/tokens`)
- [ ] Input — text, password, error state
- [ ] Card — default, interactive, bordered
- [ ] Modal / Dialog
- [ ] Toast / Alert
- [ ] Select / Dropdown
- [ ] Table — sortable, paginada

---

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:085041,50:0F6E56,100:1D9E75&height=100&section=footer&animation=fadeIn" />

Feito por [Jhonathan Pinheiro](https://github.com/jhonathanpinheiro) · MIT License

**[📧 contato](mailto:jhonathancpinheiro@gmail.com) · [🌐 portfólio](https://jhonathan-pinheiro.vercel.app) · [💼 LinkedIn](https://linkedin.com/in/jhonathan-pinheiro)**

</div>