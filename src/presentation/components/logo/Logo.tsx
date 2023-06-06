import React from 'react';
import { Heading, HStack, Icon } from '@chakra-ui/react';
import { FaChromecast, FaTicketAlt } from 'react-icons/fa';

export const Logo: React.FC = () => {
  return (
    <HStack spacing={['2', '2', '3', '4']}>
      <Icon
        as={FaChromecast}
        fontSize={['18', '22', '26', '30']}
        color="yellow.400"
      />
      <Heading
        fontFamily="roboto"
        color="whiteAlpha.900"
        fontSize={['sm', 'lg', 'xl', '2xl', '3xl']}
      >
        Movies List
      </Heading>
    </HStack>
  );
};
