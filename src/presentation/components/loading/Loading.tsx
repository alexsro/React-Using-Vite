import React from 'react';
import { Center, Progress, VStack } from '@chakra-ui/react';
import { Logo } from '../logo/Logo';

export const Loading: React.FC = () => {
  return (
    <Center w="100%" h="100%">
      <VStack spacing={4}>
        <Logo />
        <Progress w="100%" size="xs" isIndeterminate colorScheme="yellow" />
      </VStack>
    </Center>
  );
};
