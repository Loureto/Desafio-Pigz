import Image from 'next/image';

import PigzIcon from '../../../public/assets/pigz.svg';
import { pigzdidoData } from './data';
import { Box, PigzdidoContainer } from './styles';

export const Pigzdido = () => {
  return (
    <PigzdidoContainer>
      <Image src={PigzIcon} alt="Pigz" />
      <p className="container-title">
        Você tem um <br /> novo Pigzdido!
      </p>
      {pigzdidoData &&
        pigzdidoData.map((item) => <Box key={item.id}>{item.description}</Box>)}
      <p className="container-title">
        Tudo que você precisa por apenas R$199/mês
      </p>
      <p>
        Tenha todas as funcionalidades Pigz sem taxa de adesão, sem comissão por
        cada venda, sem letrinhas miúdas.
      </p>
    </PigzdidoContainer>
  );
};
