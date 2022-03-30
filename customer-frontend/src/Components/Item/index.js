import React from 'react';

import { useBasket } from '../../Context/BasketContext';

import {
  Container,
  Description,
  Thumbnail,
  BasketQuantity,
} from './styles';

import CancelBasket from '../../Components/CancelBasket';

export default function Item({ restaurantId, id, title, description, price, thumbnail, history }) {
  const item = {name: title, quantity: 1, price: price, id}

  const {setBasket, setShowBasket} = useBasket();

  const addToBasket = () => {
    setShowBasket('block')

    const itemsOnBasket = JSON.parse(localStorage.getItem('basket') || '[]');

    const alreadyHaveOrder = JSON.parse(localStorage.getItem('restaurantInfo')) || '';

    if (itemsOnBasket.length > 0 && alreadyHaveOrder.id !== restaurantId) {
      if (!(window.confirm('You already have items on basket, you want to delete all items and create a new basket?'))) {
        history.push('/')
      }
      setBasket('');
    } 

    const alreadyHaveItem = itemsOnBasket.find(basketItem => basketItem.id === item.id);
    if (alreadyHaveItem) {
      alreadyHaveItem.quantity += 1;
      const unitaryPrice = parseFloat(alreadyHaveItem.price / (alreadyHaveItem.quantity - 1)).toFixed(2);
      alreadyHaveItem.price = parseFloat(alreadyHaveItem.quantity * unitaryPrice).toFixed(2);
     
      localStorage.setItem('basket', JSON.stringify(itemsOnBasket));
      setBasket(itemsOnBasket);

    } else {
      let items = [];

      items.push(item);
      items  = items.concat(JSON.parse(localStorage.getItem('basket') ||'[]'));
      
      localStorage.setItem('basket', JSON.stringify(items))
      setBasket(items);
    }
  }
  
  return (  
    <Container onClick={() => addToBasket(id)}>
        <Description> 
          <h2>{title}</h2>
          <p>{description}</p>

          <h2 className="price">U${price}</h2>
        </Description>
        <Thumbnail thumbnail={thumbnail}>
          <BasketQuantity>
          </BasketQuantity>
        </Thumbnail>
    </Container>
  )
}