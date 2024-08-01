import React, {FC} from "react";
import {FooterRepository} from "./footer.repository";
import Picture from "../../atoms/picture/picture";

const Footer: FC = () => {
  const {text, pictureData} = FooterRepository.getFooter()

  return (
    <footer className="footer">
      <div className="footer__container">
        <Picture {...pictureData}/>
        <p className="t-small c-yellow">{text}</p>
      </div>
    </footer>
  )
}

export default Footer
