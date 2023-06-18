import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { defaultTheme } from './utils/style/theme';
import { Movies } from './presentation/movies/pages/movies/Movies';

export const MoviesApp: React.FC = () => {
  return (
    <React.StrictMode>
      <ChakraProvider resetCSS={true} theme={defaultTheme}>
        <Movies />
      </ChakraProvider>
    </React.StrictMode>
  );
};
