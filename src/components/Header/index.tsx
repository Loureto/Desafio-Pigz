import Link from 'next/link';

import { headerData } from './data';
import * as S from './styles';

function Header() {
  return (
    <S.Container>
      <div>
        <Link href="/">{headerData.logo}</Link>
        <S.Button>{headerData.labelButton}</S.Button>
      </div>
    </S.Container>
  );
}

export default Header;
