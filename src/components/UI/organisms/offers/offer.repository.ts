import { CardType } from '../../molecules/cards/cards';
import bg5 from '@images/bg5.jpg';
import bg5Webp from '@images/bg5.webp';
import bg5Webp_768 from '@images/bg5-768.webp';
import bg5Jpg_768 from '@images/bg5_768.jpg';
import bg2 from '@images/bg2.jpg';
import bg2Webp from '@images/bg2.webp';
import bg2Webp_768 from '@images/bg2-768.webp';
import bg2Jpg_768 from '@images/bg2_768.jpg';
import bg3 from '@images/bg3.jpg';
import bg3Webp from '@images/bg3.webp';
import bg3Webp_768 from '@images/bg3-768.webp';
import bg3Jpg_768 from '@images/bg3_768.jpg';
import bg4 from '@images/bg4.jpg';
import bg4Webp from '@images/bg4.webp';
import bg4Webp_768 from '@images/bg4-765.webp';
import bg4Jpg_768 from '@images/bg4_765.jpg';
import { PictureData, PictureSource } from '../../atoms/picture/picture.interfaces';

interface PictureSourceArray {
  src: string;
  media?: number;
}

export class OfferRepository {
  static getPictureSource(sourceArray: PictureSourceArray[]): PictureSource[] {
    return sourceArray.map(({ src, media }) => {
      return {
        dataSrcset: src,
        media: media ? `(max-width: 767px and min-width: 376px)` : '',
      };
    });
  }

  static getImage(src: string): PictureData {
    return {
      dataSrc: src,
      width: 1088,
      height: 350,
      alt: 'offers',
    };
  }

  static getBgParams(src: string, sourceArray: PictureSourceArray[]): PictureData {
    return {
      sources: OfferRepository.getPictureSource(sourceArray),
      ...OfferRepository.getImage(src),
    };
  }

  static getCards(): CardType[] {
    return [
      {
        id: 1,
        title: 'Move the borders of reality!',
        subtitle: "Go on a space adventure - it's possible with us!",
        link: '#',
        textLink: 'Learn more',
        pictureData: OfferRepository.getBgParams(bg3, [
          { src: bg3Webp_768, media: 768 },
          { src: bg3Jpg_768, media: 768 },
          { src: bg3Webp },
        ]),
      },
      {
        id: 2,
        title: 'Space is not just stars and planets',
        subtitle: 'Go on a space adventure',
        link: '#',
        textLink: 'Learn more',
        pictureData: OfferRepository.getBgParams(bg5, [
          { src: bg5Webp_768, media: 768 },
          { src: bg5Jpg_768, media: 768 },
          { src: bg5Webp },
        ]),
      },
      {
        id: 3,
        title: 'For those who dream of stars',
        subtitle: 'Our offer: make your dream come true',
        link: '#',
        textLink: 'Learn more',
        pictureData: OfferRepository.getBgParams(bg2, [
          { src: bg2Webp_768, media: 768 },
          { src: bg2Jpg_768, media: 768 },
          { src: bg2Webp },
        ]),
      },
      {
        id: 4,
        title: 'Fulfill your fantastic dreams',
        subtitle: 'Space has never been so close',
        link: '#',
        textLink: 'Learn more',
        pictureData: OfferRepository.getBgParams(bg4, [
          { src: bg4Webp_768, media: 768 },
          { src: bg4Jpg_768, media: 768 },
          { src: bg4Webp },
        ]),
      },
    ];
  }
}
