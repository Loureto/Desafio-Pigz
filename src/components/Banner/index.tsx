import Image from 'next/image';

import Form from '../Form';
import { bannerData } from './data';
import * as S from './styles';

function Banner() {
  return (
    <S.BannerContainer>
      <div>
        <h1>{bannerData.title}</h1>
        <div className="box-image">
          <Image src={bannerData.image} alt="Burger" priority />
        </div>
        <p>{bannerData.subtitle}</p>
      </div>

      <Form />
    </S.BannerContainer>
  );
}

export default Banner;
