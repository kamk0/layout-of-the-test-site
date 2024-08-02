import React, { FC } from 'react';
import Link from '../../atoms/link/link';
import Basket from '../../atoms/icons/basket/basket';

const Navigation: FC = () => {
  return (
    <nav className="navigation">
      <input
        type="checkbox"
        className="navigation__checkbox"
        id="navi-toggle"
      />
      <label
        htmlFor="navi-toggle"
        className="navigation__button"
      >
        <span className="navigation__icon"></span>
      </label>

      <div className="navigation__background"></div>

      <ul className="navigation__list">
        <li className="navigation__item">
          <Link
            href={'#'}
            className="navigation__text"
          >
            Home
          </Link>
        </li>
        <li className="navigation__item">
          <Link
            href={'#'}
            className="navigation__text"
          >
            Products
          </Link>
        </li>
        <li className="navigation__item">
          <Link
            href={'#'}
            className="navigation__text"
          >
            <Basket />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
