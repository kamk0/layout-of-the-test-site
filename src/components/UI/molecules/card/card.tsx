import React, {FC} from "react";
import Button from "../../atoms/button/button";
import {ButtonTheme} from "../../atoms/button/button.helper";
import Picture from "../../atoms/picture/picture";
import {PictureData} from "../../atoms/picture/picture.interfaces";

type CardProps = {
  title: string,
  subtitle: string,
  link: string,
  textLink: string,
  isBigCard: boolean,
  pictureData: PictureData,
}

export const Card: FC<CardProps> = ({title, subtitle, link, textLink, isBigCard, pictureData}: CardProps) => {

  return (
    <article className={`card ${isBigCard ? 'card_large' : ''}`}>
      <Picture
        {...pictureData}
        className="card"
      />
      <div className="card__content">
        <h3 className={`card__title ${isBigCard ? 't-h1' : 't-h3'}`}>{title}</h3>
        <p className={`card__subtitle ${isBigCard ? 't-h5' : 't-h6'}`}>{subtitle}</p>
        <Button href={link} theme={ButtonTheme.EMPTY}>{textLink}</Button>
      </div>
    </article>
    )
}
