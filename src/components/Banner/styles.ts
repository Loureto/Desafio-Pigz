import { styled } from "styled-components";

export const BannerContainer = styled.section`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(to left, #FA641E, #FF881F);
  padding: 32px 16px 105px 16px;

  > div:first-child {
    width: 100%;
    max-width: 414px;    

    h1 {
      max-width: 350px;
      font-size: ${({ theme }) => theme.fontSize._4xl};
      color: ${({ theme }) => theme.colors.white};     
      margin-bottom: 1.25rem;      
      position: absolute;
    }
  
    .box-image {
      width: 100%;
      display: flex;
      justify-content: right;      

      img {      
        margin: -2rem -7rem 0 0;
      }
    }

    > p {
      max-width: 320px;
      font-size: ${({ theme }) => theme.fontSize.base};
      color: ${({ theme }) => theme.colors.white}; 
    }
  }      
`