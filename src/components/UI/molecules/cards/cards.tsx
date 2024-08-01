import React, {FC} from "react";
import {Card} from "../card/card";

export type CardType = {
  id: number,
  title: string,
  subtitle: string,
  image: string,
  link: string,
  textLink: string,
}

type CardsProps = {
  cards: CardType[]
}

export const Cards: FC<CardsProps> = ({cards}: CardsProps) => {
  const cardItems = cards.map(({title, subtitle, link, textLink, image, id}, index) => {
    const isBigCard = index === 0 || index === 3;

    return <Card
      index={id}
      title={title}
      subtitle={subtitle}
      image={image}
      link={link}
      textLink={textLink}
      isBigCard={isBigCard}
    />
  })

  return (
    <div className="cards">
      {cardItems}
    </div>
  )
}
