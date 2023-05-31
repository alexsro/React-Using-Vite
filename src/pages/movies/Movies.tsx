import React, { useEffect, useState } from 'react';
import {
  Text,
  VStack,
  Card,
  CardHeader,
  CardBody,
  Heading,
  HStack,
  Button,
  Flex,
  Box,
} from '@chakra-ui/react';

import { Header } from '../../components/header/Header';
import { theMoviesDB } from '../../services/themoviesdb';
import { Loading } from '../../components/loading/Loading';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export const Movies: React.FC = () => {
  const [isLoading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    theMoviesDB.get('movie/top_rated').then(function (response) {
      setLoading(false);
      setMovies(response.data.results.slice(-5));
    });
  }, []);
  return (
    <Flex minW="full" maxW="full" minH="100vh" bg="blackAlpha.900">
      {isLoading ? (
        <Loading />
      ) : (
        <VStack>
          <Header />
          <HStack flexGrow={1} align="center">
            <Button bg="transparent">
              <FaChevronLeft color="orange" />
            </Button>
            <HStack>
              {movies.map(m => (
                <Card
                  h={500}
                  w={480}
                  overflowY="auto"
                  color="whiteAlpha.900"
                  bg="gray.700"
                  key={m.id}
                >
                  <CardHeader minH={180}>
                    <Heading fontSize={['sm', 'lg', 'xl', '2xl', '3xl']}>
                      {m.title}
                    </Heading>
                  </CardHeader>
                  <CardBody>
                    <Box>
                      <Heading>overview</Heading>
                      <Text>{m.overview}</Text>
                    </Box>
                  </CardBody>
                </Card>
              ))}
            </HStack>
            <Button bg="transparent">
              <FaChevronRight color="orange" />
            </Button>
          </HStack>
        </VStack>
      )}
    </Flex>
  );
};
