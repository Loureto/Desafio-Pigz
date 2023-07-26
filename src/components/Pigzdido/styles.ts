import styled from "styled-components";

export const PigzdidoContainer = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;    
    align-items: center;
    gap: 20px;

    > img {
        margin-top: -65px;
    }
    
    .container-title {
        max-width: 296px;
        text-align: center;
        font-weight: 700;
        font-size: ${({theme}) => theme.fontSize._3xl};
        color: ${({theme}) => theme.colors.gray800};
    }

    > p {
        max-width: 286px;
        text-align: center;
        font-weight: 400;
        font-size: ${({theme}) => theme.fontSize.base};
        color: ${({theme}) => theme.colors.gray800}; 
    }
`

export const Box = styled.div`
    width: 100%;
    max-width: 270px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${({theme}) => theme.colors.gray200};
    border-radius: 4rem;
    padding: 40px 0;

    > img {
        margin-bottom: 32px;
    }

    .box-title {
        font-weight: 600;
        font-size: ${({theme}) => theme.fontSize.xl};
        color: ${({theme}) => theme.colors.gray800};
        margin-bottom: 8px;
    }
    
    > p {
        font-weight: 400;
        font-size: ${({theme}) => theme.fontSize.base};
        color: ${({theme}) => theme.colors.gray800}; 
    }
`