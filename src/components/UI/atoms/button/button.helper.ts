export type ButtonProps = {
  type: string,
  theme: string,
  size: string,
  onClick: Function,
  className: string,
  disabled: boolean,
}

export enum ButtonTheme {
  DEFAULT,
  EMPTY,
}

export const buttonThemeClasses = {
  [ButtonTheme.EMPTY]: 'button_empty',
}
