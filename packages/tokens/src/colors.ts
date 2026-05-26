export const colors = {
  pine: {
    50:  '#E8F7F2',
    100: '#C3EAD9',
    200: '#9DDCC0',
    300: '#5DC49E',
    400: '#2EAD82',
    500: '#1D9E75',
    600: '#178A64',
    700: '#0F6E56',
    800: '#085041',
    900: '#04342C',
  },
  neutral: {
    0:   '#FFFFFF',
    50:  '#F5F5F3',
    100: '#E8E8E4',
    200: '#D0D0CA',
    300: '#B0B0A8',
    400: '#888880',
    500: '#666660',
    600: '#4A4A45',
    700: '#333330',
    800: '#1E1E1C',
    900: '#0D0D0C',
  },
  danger: {
    light: '#FEF2F2',
    base:  '#E24B4A',
    dark:  '#991B1B',
  },
} as const

export type PineColors = typeof colors