import React, {FC} from "react";
import Navigation from "../../molecules/navigation/navigation";
import Logo from "../../atoms/icons/logo/logo";
import Link from "../../atoms/link/link";

const Header: FC = () => {

  return (
    <header className="header">
      <div className="content header__content">
        <Link href="#" className="header__logo">
          <Logo/>
        </Link>
        <Navigation/>
      </div>
    </header>
  )
}

export default Header
