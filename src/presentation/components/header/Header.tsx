import React from 'react';
import { Flex, Heading } from '@chakra-ui/react';
import { Logo } from '../logo/Logo';

export const Header: React.FC = () => {
  return (
    <Flex
      h={100}
      w="full"
      align="center"
      justify="space-between"
      px={['4', '8', '26', '32', '60', '60']}
      borderBottom={2}
      borderColor="gray.900"
    >
      <Logo />
      <Flex></Flex>
    </Flex>
  );
};
