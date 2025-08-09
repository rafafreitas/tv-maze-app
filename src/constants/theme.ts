export type IPaletteStatusState =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'error'
  | 'info'
  | 'black'
  | 'gray'
  | 'white';

export type TVariants = IPaletteStatusState;

export interface IStatusPalette {
  primary: string;
  secondary: string;
  success: string;
  warning: string;
  error: string;
  info: string;
  dark: string;
  black: string;
  gray: string;
  white: string;
}

export const THEME: IStatusPalette = {
  primary: '#EE2A7B',
  secondary: '#6f4dcb',
  success: '#0ca436',
  warning: '#edc63a',
  error: '#f44849',
  info: '#48daf4',
  dark: '#0f0f0f',
  black: '#000000',
  gray: '#7a7575',
  white: '#fff',
};

export const OPACITY_HEX = {
  H_13: '21',
  H_20: '34',
  H_30: '4D',
  H_40: '66',
  H_50: '80',
  H_60: '99',
  H_70: 'B2',
  H_80: 'CD',
  H_90: 'E5',
};

export const PADDING_DEFAULT = 14;
