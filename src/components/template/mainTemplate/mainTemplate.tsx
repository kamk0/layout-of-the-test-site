import React, {FC} from "react";
import {ButtonTheme} from "../../UI/atoms/button/button.helper";
import Header from "../../UI/organisms/header/header";
import Footer from "../../UI/organisms/footer/footer";

type Props = {
  children: React.ReactNode;
  className?: string,
}

const MainTemplate: FC<Props> = ({children, className}: Props) => {
  return (
    <main className={className}>
      <Header/>
      {children}
      <Footer/>
    </main>
  )
}

export default MainTemplate;
