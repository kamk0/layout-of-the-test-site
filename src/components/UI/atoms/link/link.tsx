import React, {FC} from "react";

type Props = {
  children: React.ReactNode;
  href: string,
  className?: string,
}

const Link: FC<Props> = (
  {
    children,
    href,
    className,
  }: Props) => {

  return <a href={href} className={`link t-link ${className}`}>{children}</a>
}
export default Link;
