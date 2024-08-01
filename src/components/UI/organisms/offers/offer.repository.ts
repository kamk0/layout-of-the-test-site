import {CardType} from "../../molecules/cards/cards";
import bg5 from '@images/bg5.jpg';
import bg2 from '@images/bg2.jpg';
import bg3 from '@images/bg3.jpg';
import bg4 from '@images/bg4.jpg';

export class OfferRepository {
  static getCards(): CardType[] {
    return [
      {
        id: 1,
        title: "Move the borders of reality!",
        subtitle: "Go on a space adventure - it's possible with us!",
        image: bg3,
        link: '#',
        textLink: "Learn more"
      },
      {
        id: 2,
        title: "Space is not just stars and planets",
        subtitle: "Go on a space adventure",
        image: bg5,
        link: "#",
        textLink: "Learn more"
      },
      {
        id: 3,
        title: "For those who dream of stars",
        subtitle: "Our offer: make your dream come true",
        image: bg2,
        link: "#",
        textLink: "Learn more"
      },
      {
        id: 4,
        title: "Fulfill your fantastic dreams",
        subtitle: "Space has never been so close",
        image: bg4,
        link: "#",
        textLink: "Learn more"
      }
    ]
  }
}
