import styled from "styled-components";

export const Container = styled.header`
  width: 100vw;
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 1rem;

  > div {
    width: 100%;
    max-width: 414px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Button = styled.button`
  background: linear-gradient(to left, #fa641e, #ff881f);
  border: none;
  border-radius: 2rem;
  color: ${({ theme }) => theme.colors.white};
  padding: 6px 24px;
  cursor: pointer;

  &:hover {
    filter: brightness(0.9);
  }
`;
