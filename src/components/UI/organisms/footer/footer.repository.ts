import rocket from '@images/rocket.png';
import rocketWebp from '@images/rocket.webp';
import { PictureData } from '../../atoms/picture/picture.interfaces';

export class FooterRepository {
  static getImage(): PictureData {
    return {
      sources: [{ dataSrcset: rocketWebp }],
      dataSrc: rocket,
      width: 93,
      height: 81,
      alt: 'rocket',
    };
  }

  static getFooter() {
    return {
      text: 'Exciting space adventure!',
      pictureData: FooterRepository.getImage(),
    };
  }
}
