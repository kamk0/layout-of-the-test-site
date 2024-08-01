import React, {FC} from "react";
import {Cards, CardType} from "../../molecules/cards/cards";
import {OfferRepository} from "./offer.repository";

export const Offer: FC = () => {
  const cards: CardType[] = OfferRepository.getCards();

  return (
    <section className="offer">
      <div className="content content_pt">
        <div className="offer__content">
          <div className="offer__container">
            <h2 className="t-h4">Offers</h2>
            <Cards cards={cards} />
          </div>
        </div>
      </div>
    </section>
  )
}
