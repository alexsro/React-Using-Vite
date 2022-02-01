import React from 'react';
import { Container } from './styles';

interface CardProps {
  text: string;
}

const Card: React.FC<CardProps> = ({text, ...rest}) => {
  return <Container>{text}</Container>
}

export default Card;