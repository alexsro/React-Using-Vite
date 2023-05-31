import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { defaultTheme } from './utils/theme';
import { Movies } from './pages/movies/Movies';

export const LuckTicketsApp: React.FC = () => {
  return (
    <React.StrictMode>
      <ChakraProvider resetCSS={true} theme={defaultTheme}>
        <Movies />
      </ChakraProvider>
    </React.StrictMode>
  );
};
