import Image from 'next/image';

import MarketIcon from '../../../public/assets/market.svg';
import GestaoIcon from '../../../public/assets/pigz-gestao.svg';
import PrintIcon from '../../../public/assets/print.svg';
import SmartphoneIcon from '../../../public/assets/smartphone.svg';

export const pigzdidoData = [
  {
    id: crypto.randomUUID(),
    description: (
      <>
        <Image src={MarketIcon} alt="Icone market" />
        <p className="box-title">Marketplace</p>
        <p>Pra sua loja vender mais</p>
      </>
    )
  },
  {
    id: crypto.randomUUID(),
    description: (
      <>
        <Image src={SmartphoneIcon} alt="Icone smartphone" />
        <p className="box-title">É fácil e rápido</p>
        <p>Fazer um pedido no Pigz</p>
      </>
    )
  },
  {
    id: crypto.randomUUID(),
    description: (
      <>
        <Image src={GestaoIcon} alt="Icone gestão" />
        <p className="box-title">Pigz Gestão</p>
        <p>Você no controle, sempre</p>
      </>
    )
  },
  {
    id: crypto.randomUUID(),
    description: (
      <>
        <Image src={PrintIcon} alt="Icone impressora" />
        <p className="box-title">Vias de impressão</p>
        <p>Personalizáveis</p>
      </>
    )
  }
];
