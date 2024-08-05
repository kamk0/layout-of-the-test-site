import React, { FC } from 'react';
import classNames from "classnames";

type Props = {
  children: React.ReactNode;
  href: string;
  className?: string;
};

const Link: FC<Props> = ({ children, href, className }: Props) => {
  return (
    <a
      href={href}
      className={classNames('link', 't-extra-small', className)}
    >
      {children}
    </a>
  );
};
export default Link;
