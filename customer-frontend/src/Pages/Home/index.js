import React, { useEffect, useState } from 'react';

import Header from '../../Components/Header';
import RestaurantItem from '../../Components/RestaurantItem';
import Basket from '../../Components/Basket';

import BasketProvider from '../../Context/BasketContext';

import {  
  HeaderContainer,
  Container,
  Filter,
  FilterContainer,
  FilterButton,
  RestaurantsGrid,
} from './styles';

import { SubTitleItem, Title, SmallText} from '../../GlobalStyles';

import { FaBiking } from 'react-icons/fa';
import { FiShoppingBag } from 'react-icons/fi';

import api from '../../services/api';

export default function Home({ history }) {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await api.get('/restaurants');
      setRestaurants(response.data);
    }

    fetchData();
  }, []);

  console.log(restaurants)

  return (
    <BasketProvider>
      <HeaderContainer>
        <Header />
        <Basket history={history} />
      </HeaderContainer>

      <Container>
        <Filter>
          <FilterContainer>
            <FilterButton isSelected={true} > <FaBiking size={20} /> Delivery</FilterButton>
            <FilterButton> <FiShoppingBag size={20} /> Pickup</FilterButton>
          </FilterContainer>
        </Filter>



        <SubTitleItem>
          <Title size="35px"> 대웅배달 Plarform</Title>
          <SmallText>The fastest food to your door</SmallText>
        </SubTitleItem>

        <RestaurantsGrid>
          {restaurants.filter(restaurant => restaurant.delivery_price > 0).map(restaurant => (
            <RestaurantItem restaurant={restaurant} key={restaurant.id} />
          ))}
        </RestaurantsGrid>
      </Container>
    </BasketProvider>
  )
}
