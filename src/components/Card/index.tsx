import { Box, ChakraProps } from '@chakra-ui/react';
import React from 'react';
import { Container } from './styles';

type CardProps = {
  text: string;
}

const Card: React.FC<CardProps> = ({text, ...rest}) => {
  return (
    <Box>
      <Container>{text}</Container>
    </Box>
  )
}

export default Card;