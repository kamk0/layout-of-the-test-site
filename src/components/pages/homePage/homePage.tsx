import React, {FC} from 'react';
import MainTemplate from '../../template/mainTemplate/mainTemplate';
import Hero from '../../UI/organisms/hero/hero';
import {Offer} from '../../UI/organisms/offers/offer';
import {InfoText} from '../../UI/organisms/infoText/infoText';

const HomePage: FC = () => {
  return (
    <MainTemplate>
      <Hero/>
      <Offer/>
      <InfoText/>
    </MainTemplate>
  );
};

export default HomePage;
