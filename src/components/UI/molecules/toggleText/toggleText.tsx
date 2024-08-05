import React from 'react';
import classNames from 'classnames';

type Props = {
  text: string;
  readMore?: string;
  className?: string;
};
const ToggleText = ({ text, readMore, className }: Props): React.JSX.Element => {
  return (
    <>
      <input
        type="checkbox"
        className={classNames('toggle-text__checkbox', { [`${className}__checkbox`]: className })}
        id={classNames(`${className}ToggleText`)}
      />

      <p className={classNames('toggle-text__text', 't-paragraph', { [`${className}__text`]: className })}>{text}</p>

      <label
        htmlFor={classNames(`${className}ToggleText`)}
        className={classNames('toggle-text__button', { [`${className}__button`]: className })}
      >
        <span className="link t-extra-small t-paragraph c-yellow">{readMore || 'Read more'}</span>
      </label>
    </>
  );
};

export default ToggleText;
