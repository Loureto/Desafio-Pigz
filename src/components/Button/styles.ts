import styled, { css} from "styled-components";
import { ButtonProps } from ".";

type ButtonReduced = Pick<ButtonProps, 'maxWidth'>

export const ButtonContainer = styled.button<ButtonReduced>`

    ${({maxWidth}) => css`
        max-width: ${maxWidth ?? 'initial'} ;
    `}

    width: 100%;
    background-color: ${({theme}) => theme.colors.orange400};
    color: ${({theme}) => theme.colors.white};
    border: none;
    border-radius: 1rem;
    padding: 12px 0;
    
    font-size: ${({theme}) => theme.fontSize.base};

`