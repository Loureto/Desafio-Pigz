import styled from "styled-components";

export const FormContainer = styled.div`
  width: 100%;  
  display: flex;
  justify-content: center;
  margin-top: 2rem;

  > div:first-child {
    width: 100%;
    max-width: 414px;
    background: ${({ theme }) => theme.colors.white};
    border-radius: 1rem;
    padding: 2rem 1.5rem; 
  }

  > h2 {
    font-size: 1.75rem;
    color: ${({ theme }) => theme.colors.gray800};
    margin-bottom: 0.5rem;
  }  

  > p:first-child {
    font-size: 13px;
    color: ${({ theme }) => theme.colors.gray800};
  }

  .box-input {
    display: flex;
    flex-direction: column;
    margin-top: 1.5rem;
    gap: 1.25rem;
  }

  p {
    font-size: 13px;
    color: ${({ theme }) => theme.colors.gray800};
    margin-top: 20px;
    margin-bottom: 40px;
  }

`