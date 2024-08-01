import React, {FC} from "react";
import {FooterRepository} from "./footer.repository";

const Footer: FC = () => {
  const {text, icon} = FooterRepository.getFooter()
  return (
    <footer className="footer">
      <div className="footer__container">
        <img src={icon.src} alt="{icon.alt}"/>
        <p className="t-small c-yellow">{text}</p>
      </div>
    </footer>
  )
}

export default Footer
