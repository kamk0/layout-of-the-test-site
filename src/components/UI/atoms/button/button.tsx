import React, { FC } from 'react';
import { ButtonTheme, buttonThemeClasses } from './button.helper';

type Props = {
  href: string;
  theme?: ButtonTheme;
  className?: string;
  children: React.ReactNode;
};

const Button: FC<Props> = ({ children, href, theme, className }: Props) => {
  return (
    <a
      href={href}
      className={`button t-medium ${theme && buttonThemeClasses[theme]} ${className}`}
    >
      {children}
    </a>
  );
};
export default Button;
