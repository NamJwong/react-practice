import { COLOR } from '../../styles/neogasogaeseo/color';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  width: 1080px;
  height: 1920px;
  padding-top: 433px;
  background-color: ${COLOR.GRAY_1};
  & > *:first-child {
    width: 100%;
    margin-left: 226px;
    display: flex;
    /* justify-content: center; */
    gap: 35.34px;
    margin-bottom: 57.43px;
    & > *:first-child {
      width: 132.53px;
      height: 132.53px;
      border-radius: 44.1778px;
      object-fit: cover;
    }
    & > *:last-child {
      width: 100%;
      padding-top: 22.09px;
      & > *:first-child {
        font-weight: 600;
        font-size: 44.1778px;
        color: ${COLOR.GRAY_8};
        margin-bottom: 17.85px;
      }
      & > *:last-child {
        font-weight: 400;
        font-size: 30.9244px;
        color: ${COLOR.GRAY_5};
      }
    }
  }
`;

export const Card = styled.div`
  margin-left: 226px;
  width: 627.32px;
  height: 804.04px;
  background-color: ${COLOR.WHITE};
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2.20889px solid ${COLOR.GRAY_15};
  border-radius: 39.76px;
  & > *:nth-child(1) {
    margin-top: 92.77px;
    width: 189.96px;
    height: 189.96px;
  }
  & > *:nth-child(2) {
    font-weight: 600;
    font-size: 39.76px;
    line-height: 143.99%;
    text-align: center;
    color: ${COLOR.GRAY_7};
    width: 100%;
    margin-top: 61.85px;
    white-space: pre-line;
  }
  & > *:nth-child(3) {
    width: 100%;
    font-weight: 400;
    font-size: 33.1333px;
    color: ${COLOR.GRAY_5};
    text-align: center;
    margin-top: 27.37px;
    white-space: pre-line;
  }
  & > *:nth-child(4) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    top: 600.82px;
    width: 673.7px;
    & > hr {
      width: 512.46px;
      border: 2.20889px dashed ${COLOR.GRAY_2};
    }
  }
  & > *:nth-child(5) {
    margin-top: 165.08px;
  }
`;

export const Circle = styled.div`
  width: 50.8px;
  height: 50.8px;
  background-color: ${COLOR.GRAY_1};
  border-radius: 50%;
`;
