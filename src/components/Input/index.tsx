import { InputHTMLAttributes, useId } from 'react';

import * as S from './styles';

type InputProps = {
  label?: string;
  IconLeft?: () => void;
  IconRight?: () => void;
} & InputHTMLAttributes<HTMLInputElement>;

function Input({ label = '', IconLeft, IconRight, ...rest }: InputProps) {
  const inputRef = useId();

  return (
    <div>
      <S.Label htmlFor={inputRef}>{label}</S.Label>
      <S.InputContainer>
        <>
          {IconLeft && IconLeft()}
          <S.Input id={inputRef} {...rest} />
          {IconRight && IconRight()}
        </>
      </S.InputContainer>
    </div>
  );
}

export default Input;
