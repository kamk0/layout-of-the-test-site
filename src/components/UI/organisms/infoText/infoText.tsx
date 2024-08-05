import React, {FC} from 'react';
import {InfoTextRepository} from './infoText.repository';
import Link from '../../atoms/link/link';

export const InfoText: FC = () => {
  const {title, subTitle, link} = InfoTextRepository.getInfo();

  return (
    <section className="info-text">
      <div className="content content_pb">
        <div className="info-text__container">
          <h2 className="t-h4">{title}</h2>
          <p className="t-paragraph info-text__text">{subTitle}</p>
          <Link
            href={link.href}
            className="t-paragraph c-yellow"
          >
            {link.text}
          </Link>
        </div>
      </div>
    </section>
  );
};
