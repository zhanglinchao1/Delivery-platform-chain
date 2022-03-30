import React from 'react';

import LoadingSvg from '../../assets/svg-loaders/oval.svg'
import { Container } from './styles';

export default function Loading() {
  return (
    <Container>
      <div>
        <img src={LoadingSvg} alt="loading animation"/>
        <p>Wait a moment</p>
      </div>
    </Container>
  )
}