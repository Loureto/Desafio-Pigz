import Image from 'next/image';

import LogoIcon from '../../../public/assets/pigz-gestao-logo.svg';

export const headerData = {
  logo: <Image src={LogoIcon} alt="Logo" />,
  labelButton: 'Já sou parceiro'
};
