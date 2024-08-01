import React, {FC} from "react";
import heroBg from '@images/bg1.jpg';
import earth from '@images/EARTH.png';
import Button from "../../atoms/button/button";

const Hero: FC = () => {
  return (
    <section className="hero">
      <div className="content hero__content">
        <div className="hero__container">
          <h1 className="hero__title t-h2">Discover the vast expanses of <span className="c-pink">space</span></h1>
          <p className="hero__subtitle t-h4">
            Where the possibilities are <span className="c-yellow">endless!</span>
          </p>
          <Button href={`#`} className={'c-yellow'}>Learn more</Button>
        </div>
        <div className="hero__image">
          <picture>
            <img decoding="async" src={earth}
                 loading="lazy" alt="image"/>
          </picture>
        </div>
      </div>
      <div className="hero__bg">
        <picture className="hero__picture">
          <img
            className="hero__bg-image"
            decoding="async"
            src={heroBg}
            loading="lazy"
            alt="image"
          />
        </picture>
      </div>
    </section>
  )
}

export default Hero;
