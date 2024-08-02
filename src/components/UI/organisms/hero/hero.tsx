import React, {FC} from "react";
import Button from "../../atoms/button/button";
import {HeroRepository} from "./hero.repository";
import Picture from "../../atoms/picture/picture";

const Hero: FC = () => {
  const pictureData = HeroRepository.getBgParams();
  const heroImagePictureData = HeroRepository.getHeroImage();

  return (
    <section className="hero">
      <div className="content hero__content">
        <div className="hero__container">
          <h1 className="hero__title t-h2">Discover the vast expanses of <span className="c-pink">space</span></h1>
          <p className="hero__subtitle t-h4">
            Where the possibilities are <span className="c-yellow">endless!</span>
          </p>
          <Button href={`#`} className="c-yellow">Learn more</Button>
        </div>
        <div className="hero__image">
          <Picture
            {...heroImagePictureData}
            className="hero"
          />
        </div>
      </div>
      <div className="hero__bg">
        <Picture
          {...pictureData}
          className="hero-bg"
        />
      </div>
    </section>
  )
}

export default Hero;
