import React, {FC} from "react";
import Button from "../../atoms/button/button";
import {ButtonTheme} from "../../atoms/button/button.helper";

type CardProps = {
  index: React.Key,
  title: string,
  subtitle: string,
  image: string,
  link: string,
  textLink: string,
  isBigCard: boolean,
}

export const Card: FC<CardProps> = ({index, title, subtitle, image, link, textLink, isBigCard}: CardProps) => {

  return (
    <article key={index} className={`card ${isBigCard ? 'card_large' : ''}`}>
      <picture>
        <img
          className="card__image"
          decoding="async"
          src={image}
          loading="lazy"
          alt="image"
        />
      </picture>
      <div className="card__content">
        <p className={`card__title ${isBigCard ? 't-h1' : 't-h3'}`}>{title}</p>
        <p className={`card__title ${isBigCard ? 't-h5' : 't-h6'}`}>{subtitle}</p>
        <Button href={link} theme={ButtonTheme.EMPTY}>{textLink}</Button>
      </div>
    </article>
    )
}
