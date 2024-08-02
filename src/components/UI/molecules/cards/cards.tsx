import React, {FC} from "react";
import {Card} from "../card/card";
import {PictureData} from "../../atoms/picture/picture.interfaces";

export type CardType = {
  id: number,
  title: string,
  subtitle: string,
  image: string,
  link: string,
  textLink: string,
  pictureData: PictureData,
}

type CardsProps = {
  cards: CardType[]
}

export const Cards: FC<CardsProps> = ({cards}: CardsProps) => {
  const cardItems = cards.map((
    {
      title,
      subtitle,
      link,
      textLink,
      image,
      id,
      pictureData
    },
    index,
  ) => {
    const isBigCard = index === 0 || index === 3;

    return <Card
      key={id}
      title={title}
      subtitle={subtitle}
      image={image}
      link={link}
      textLink={textLink}
      isBigCard={isBigCard}
      pictureData={pictureData}
    />
  })

  return (
    <div className="cards">
      {cardItems}
    </div>
  )
}
