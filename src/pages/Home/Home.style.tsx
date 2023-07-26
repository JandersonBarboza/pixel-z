import styled from 'styled-components';
import BannerBG from '../../assets/banner/BGBanner.svg';

export const StyledPage = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 5vw;
    @media (max-width: 768px) {
        padding: 0;
    }
`

export const StyledHeader = styled.div`
    height: 25vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #686f99;
    background-image: url(${BannerBG});
    /* border: 10px solid red; */
`

export const StyledBody = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px;
    gap: 16px;
    height: 65vh;
    background: #686f99;
    border-width: 3px;
    border-style: dashed;
    border-color: #404973;
    border-left: 0.5px;
    border-right: 0.5px;
    @media (max-width: 768px) {
        flex-direction: column;
        height: 100%;
    }
`

export const StyledPopup = styled.div`
    width: auto;
    :first-child {
        display: none;
        @media (max-width: 768px) {
            display: flex;
        }
    }
    :nth-last-child(0) {
        @media (max-width: 768px) {
            display: '';
        }
    }
`

export const StyledContent = styled.div`
    /* height: 2.5vh 16px; */
    padding: 0 16px;
    background: #fff;
    height: 100%;
    width: 70%;
    border-radius: 8px;
    overflow-Y: auto;
    @media (max-width: 768px) {
        width: 95%;
    }
`
export const StyledMenu = styled.div`
    /* height: 2.5vh 16px; */
    background: #fff;
    height: 100%;
    width: 386px;
    border-radius: 8px;
    overflow-Y: auto;
    overflow-X: hidden;
    :first-child {
        border: none;
        width: 100%;
        @media (max-width: 768px) {
            display: none;
            height: 50%;
        }
    }
`

export const StyledFooter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 5vh;
    color: #fff;
    background: #686f99;
    /* border-top: 4px dashed #404973; */
`