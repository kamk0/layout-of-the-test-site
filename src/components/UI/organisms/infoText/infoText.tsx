import React, { FC } from 'react';
import { InfoTextRepository } from './infoText.repository';
import ToggleText from '../../molecules/toggleText/toggleText';

export const InfoText: FC = () => {
  const { title, subTitle } = InfoTextRepository.getInfo();

  return (
    <section className="info-text">
      <div className="content content_pb">
        <div className="info-text__container">
          <h2 className="t-h4">{title}</h2>
          <ToggleText
            text={subTitle}
            className={'info-text'}
          />
        </div>
      </div>
    </section>
  );
};
