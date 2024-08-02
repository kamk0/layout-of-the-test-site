import React, {FC} from "react";
import logo from '@images/logo-min.svg';

import Navigation from "../../molecules/navigation/navigation";
import Logo from "../../atoms/logo/logo";
import Link from "../../atoms/link/link";

const Header: FC = () => {

  return (
    <header className="header">
      <div className="content header__content">
        <Link href="#" className={'header__logo'}>
          <Logo/>
        </Link>
        <Navigation/>
      </div>
    </header>
  )
}

export default Header
