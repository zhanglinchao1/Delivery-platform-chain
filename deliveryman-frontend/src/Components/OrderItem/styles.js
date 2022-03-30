import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  
  a {
    text-decoration: none;
  }
  
  p {
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-size: 12px;
    color: #5e5e5e;
    padding: 5px 0 10px 0;
  }

  .title-container {
    padding: 15px 0;
    border-bottom: 1px solid #cfcfcf; 
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .rating {
      background-color: #eeeeee;
      padding: 10px 5px;
      border-radius: 50%;
      p {
        font-weight: bold;
        padding: 0;
        font-size: 12px;
        color: #242424;
      }
    }

    p {
      font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
      color: black;
      font-size: 14px;
      font-weight: 100;
      color: black;
    }
  } 
`;

export const Thumbnail = styled.div`
  overflow: hidden;
  height: 270px;
  width: 400px;
  border: none;
  background-color: white;
`;

export const Image = styled.img`
  max-width: 100%;
`;

export const Favorite = styled.div``; 


export const LinkToRestaurant = styled(Link)``;


export const Button = styled.button`
  border: none;
  padding: 10px 25px;
  color: black;

  &:hover {
    background-color: ${props => props.warning ? "#db1a3a" : "#06C167"};
    color: white;
  }

`;