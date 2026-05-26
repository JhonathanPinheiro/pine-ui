<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:085041,50:0F6E56,100:1D9E75&height=140&section=header&text=%40pine-ui%2Freact&fontSize=42&fontColor=ffffff&fontAlignY=52&animation=fadeIn" />

[![npm version](https://img.shields.io/npm/v/@pine-ui/react?style=flat-square&color=1D9E75)](https://www.npmjs.com/package/@pine-ui/react)
[![npm downloads](https://img.shields.io/npm/dm/@pine-ui/react?style=flat-square&color=085041)](https://www.npmjs.com/package/@pine-ui/react)
[![TypeScript](https://img.shields.io/badge/TypeScript-strict-007ACC?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-1D9E75?style=flat-square)](../../LICENSE)

**Componentes React tipados, acessíveis e com dark mode nativo.**

</div>

---

## Instalação

```bash
npm install @pine-ui/react @pine-ui/tokens
# ou
pnpm add @pine-ui/react @pine-ui/tokens
```

Adicione os tokens CSS no root do projeto:

```tsx
// app/layout.tsx (Next.js) ou main.tsx (Vite)
import '@pine-ui/tokens/css'
```

---

## Componentes

### Button

```tsx
import { Button } from '@pine-ui/react'

// Variantes
<Button variant="primary">Salvar</Button>
<Button variant="secondary">Cancelar</Button>
<Button variant="ghost">Ver mais</Button>
<Button variant="danger">Excluir</Button>
<Button variant="link">Saiba mais</Button>

// Tamanhos
<Button size="xs">Extra Small</Button>
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>   {/* padrão */}
<Button size="lg">Large</Button>
<Button size="xl">Extra Large</Button>

// Estados
<Button loading>Salvando...</Button>
<Button disabled>Indisponível</Button>
<Button fullWidth>Criar conta gratuita</Button>

// Com ícones
<Button leftIcon={<PlusIcon />}>Novo projeto</Button>
<Button rightIcon={<ArrowIcon />}>Continuar</Button>
```

#### Props

| Prop | Tipo | Padrão | Descrição |
|---|---|---|---|
| `variant` | `primary` \| `secondary` \| `ghost` \| `danger` \| `link` | `primary` | Estilo visual |
| `size` | `xs` \| `sm` \| `md` \| `lg` \| `xl` | `md` | Tamanho |
| `loading` | `boolean` | `false` | Exibe spinner e desabilita |
| `disabled` | `boolean` | `false` | Desabilita o botão |
| `fullWidth` | `boolean` | `false` | Ocupa 100% da largura |
| `leftIcon` | `ReactNode` | — | Ícone à esquerda |
| `rightIcon` | `ReactNode` | — | Ícone à direita |

> Aceita todos os atributos nativos do `<button>` HTML.

---

## Dark Mode

Pine UI usa `[data-theme="dark"]` no elemento raiz — zero JavaScript no runtime:

```tsx
// toggle manual
document.documentElement.setAttribute('data-theme', 'dark')

// com next-themes
import { ThemeProvider } from 'next-themes'

<ThemeProvider attribute="data-theme">
  {children}
</ThemeProvider>
```

---

## Tokens CSS

Os componentes usam CSS Variables do `@pine-ui/tokens`. Você pode sobrescrever qualquer token no seu projeto:

```css
:root {
  --color-brand:       #seu-verde;
  --color-brand-hover: #seu-verde-hover;
  --radius-md:         0.75rem;
}
```

---

## Pacotes relacionados

| Pacote | Descrição |
|---|---|
| [`@pine-ui/tokens`](https://www.npmjs.com/package/@pine-ui/tokens) | Design tokens — cores, tipografia, espaçamentos |

---

## Contribuindo

```bash
git clone https://github.com/jhonathanpinheiro/pine-ui
cd pine-ui
pnpm install
pnpm run storybook  # localhost:6006
```

---

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:085041,50:0F6E56,100:1D9E75&height=80&section=footer&animation=fadeIn" />

Feito por [Jhonathan Pinheiro](https://github.com/jhonathanpinheiro) · MIT License

</div>