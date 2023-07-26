import styled from "styled-components";

export const InputContainer = styled.div`
  width: 100%;
  height: 3rem; 
  padding: 0 1rem;
  background-color: ${({ theme }) => theme.colors.white};;
  border-radius: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.gray700};
  margin-top: 4px;

`

export const Label = styled.label`
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.colors.gray800};
`

export const Input = styled.input`
  width: 100%;
  height: 100%;
  background: none;
  border: none;

  &::placeholder{
    color: ${({ theme }) => theme.colors.gray300};
  }

  &:focus {
    outline: none;
  }
`