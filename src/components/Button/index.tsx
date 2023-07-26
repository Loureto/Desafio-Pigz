import { ButtonHTMLAttributes, FC, ReactNode } from 'react';

import { ButtonContainer } from './styles';

export type ButtonProps = {
  children: ReactNode;
  maxWidth?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FC<ButtonProps> = ({ children, ...rest }) => {
  return <ButtonContainer {...rest}>{children}</ButtonContainer>;
};
