import rocket from '@images/rocket.png';

export class FooterRepository {
  static getFooter() {
    return {
      text: "Exciting space adventure!",
      icon: {
        src: rocket,
        alt: "Logo",
      },
    }
  }
}
