<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:085041,50:0F6E56,100:1D9E75&height=180&section=header&text=Pine%20UI&fontSize=64&fontColor=ffffff&fontAlignY=42&desc=Modern%20React%20Design%20System&descAlignY=62&descSize=16&animation=fadeIn" />

<br/>

[![npm](https://img.shields.io/npm/v/@pine-ui/react?style=flat-square&color=1D9E75&label=%40pine-ui%2Freact)](https://www.npmjs.com/package/@pine-ui/react)
[![npm](https://img.shields.io/npm/v/@pine-ui/tokens?style=flat-square&color=085041&label=%40pine-ui%2Ftokens)](https://www.npmjs.com/package/@pine-ui/tokens)
[![npm downloads](https://img.shields.io/npm/dm/@pine-ui/react?style=flat-square&color=1D9E75)](https://www.npmjs.com/package/@pine-ui/react)
[![Storybook](https://img.shields.io/badge/Storybook-Chromatic-ff4785?style=flat-square&logo=storybook&logoColor=white)](https://6a16e1f903693d77ee440b2b-bephsxasxl.chromatic.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-strict-007ACC?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-1D9E75?style=flat-square)](LICENSE)

### Modern React Design System

Componentes React acessíveis, tipados e escaláveis com design tokens semânticos e dark mode nativo via CSS Variables.

[📚 Storybook](https://6a16e1f903693d77ee440b2b-bephsxasxl.chromatic.com/) · [📦 @pine-ui/react](https://www.npmjs.com/package/@pine-ui/react) · [🎨 @pine-ui/tokens](https://www.npmjs.com/package/@pine-ui/tokens) · [🐛 Reportar bug](https://github.com/jhonathanpinheiro/pine-ui/issues)

</div>

---

# ✨ Features

- 🌙 Dark mode nativo
- ♿ Componentes acessíveis
- 🔒 TypeScript strict
- 🎨 Design tokens semânticos
- 🌳 Tree-shakeable
- 📦 Monorepo escalável
- 📚 Storybook hospedado no Chromatic
- ⚡ CSS Variables sem runtime
- 🧩 Componentes desacoplados e reutilizáveis

---

# 📚 Documentação

Explore os componentes, variantes, estados e tokens diretamente no Storybook:

👉 **[Abrir documentação](https://6a16e1f903693d77ee440b2b-bephsxasxl.chromatic.com/)**

---

# 🚀 Instalação

```bash
npm install @pine-ui/react @pine-ui/tokens
```

Adicione os tokens CSS no root da aplicação:

```tsx
// main.tsx ou app/layout.tsx
import '@pine-ui/tokens/css'
```

---

# ⚡ Uso rápido

```tsx
import '@pine-ui/tokens/css'
import { Button } from '@pine-ui/react'

export function App() {
  return (
    <Button variant="primary">
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
<Button size="small">Small</Button>
<Button size="medium">Medium</Button>   {/* padrão */}
<Button size="large">Large</Button>

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
  padding:    var(--space-md);
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