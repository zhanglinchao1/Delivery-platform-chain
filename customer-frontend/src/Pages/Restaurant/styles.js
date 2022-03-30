import styled from 'styled-components';

import Banner from '../../assets/banner.jpeg'

export const HeaderContainer = styled.div`
  display: flex;
`;

export const BannerContainer = styled.div`
  height: 380px;
  background: url(${props => `https://api.arthurcarvalho.info/food/files/${props.banner}`}) no-repeat center center;
  background-size: cover;
  
  display: flex;
  align-items: center;
  margin-top: 3%;

`;

export const RestaurantInfo = styled.div`
  background-color: white;
  padding: 20px 70px;
  max-width: 680px;

  p {
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    color: black;
    font-size: 14px;
    font-weight: 100;
    color: black;
    margin: 5px 0;
  }

  .basic-info {
    margin: 10px 0;
  }
`;


export const MenuContainer = styled.div`
  max-width: 1250px;
  margin: 0 auto;
  width: 100%; 
  padding: 15px;
  display: flex;
  flex-direction: column;
`;

export const GridItems = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  grid-column-gap: 20px;
  grid-row-gap: 40px;

  @media (min-width: 861px) and (max-width: 1333px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 861px) {
    justify-content: center;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
`;