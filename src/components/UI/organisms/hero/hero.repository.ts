import heroBg from '@images/bg1.jpg';
import bg1Web from '@images/bg1.webp';
import bg1360Web from '@images/bg1-360.webp';
import bg1768Web from '@images/bg1-768.webp';
import bg1360 from '@images/bg1_360.jpg';
import bg1768 from '@images/bg1_768.jpg';
import earth from '@images/EARTH.png';
import earthWebp from '@images/earth.webp';
import { PictureData, PictureSource } from '../../atoms/picture/picture.interfaces';

export class HeroRepository {
  static getSource(): PictureSource[] {
    return [
      {
        dataSrcset: bg1768Web,
        media: `(max-width: 767px and min-width: 376px)`,
      },
      {
        dataSrcset: bg1768,
        media: `(max-width: 767px and min-width: 376px)`,
      },
      {
        dataSrcset: bg1360Web,
        media: `(max-width: 375px)`,
      },
      {
        dataSrcset: bg1360,
        media: `(max-width: 375px)`,
      },
      {
        dataSrcset: bg1Web,
      },
    ];
  }

  static getImage(): PictureData {
    return {
      dataSrc: heroBg,
      width: 1905,
      height: 469,
      alt: 'hero',
    };
  }

  static getBgParams(): PictureData {
    return {
      sources: HeroRepository.getSource(),
      ...HeroRepository.getImage(),
    };
  }

  static getHeroImage(): PictureData {
    return {
      sources: [{ dataSrcset: earthWebp }],
      dataSrc: earth,
      width: 327,
      height: 367,
      alt: 'earth',
    };
  }
}
