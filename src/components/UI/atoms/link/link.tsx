import React, { FC } from 'react';

type Props = {
  children: React.ReactNode;
  href: string;
  className?: string;
};

const Link: FC<Props> = ({ children, href, className }: Props) => {
  return (
    <a
      href={href}
      className={`link t-extra-small ${className}`}
    >
      {children}
    </a>
  );
};
export default Link;
