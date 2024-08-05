import React, { FC } from 'react';
import classNames from 'classnames';

type Props = {
  className?: string;
};

const LinearGradient: FC<Props> = ({ className }: Props) => {
  return (
    <linearGradient
      x1="-1.11022302e-14%"
      y1="50%"
      x2="100%"
      y2="50%"
      id={classNames(`${className}Gradient`)}
    >
      <stop
        className={classNames(className && `${className}__stop`, `${className}__stop-one`)}
        offset="0%"
      />
      <stop
        className={classNames(className && `${className}__stop`, `${className}__stop-two`)}
        offset="58%"
      />
      <stop
        className={classNames(className && `${className}__stop`, `${className}__stop-three`)}
        offset="100%"
      />
    </linearGradient>
  );
};

export default LinearGradient;
