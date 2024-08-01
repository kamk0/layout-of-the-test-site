import React, {FC} from "react";
import basket from '@images/basket.svg';
import Link from "../../atoms/link/link";
import Basket from "../../atoms/basket/basket";

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
        <span className="navigation__icon">&nbsp;</span>
      </label>

      <div className="navigation__background">&nbsp;</div>

      <ul className="navigation__list">
        <li className="navigation__item">
          <Link href={'#'} className={'navigation__text h-one'}>Home</Link>
        </li>
        <li className="navigation__item">
          <Link href={'#'} className={'navigation__text h-one'}>Products</Link>
        </li>
        <li className="navigation__item">
          <Basket/>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
