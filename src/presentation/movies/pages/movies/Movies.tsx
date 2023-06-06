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

import { Header } from '../../../components/header/Header';
import { theMoviesDB } from '../../../../providers/https_client/https_client_provider';
import { Loading } from '../../../components/loading/Loading';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { CardsType } from '../../../../types/cards_type';
import { calcMaxCards, cardWidth } from '../../../../utils/max_cards';

export const Movies: React.FC = () => {
  const [isLoading, setLoading] = useState(true);
  const [movies, setMovies] = useState<CardsType[]>([]);
  const [maxCards, setMaxCards] = useState(calcMaxCards());
  const [currentPage, setCurrentPage] = useState(1);
  const [slideClicks, setSlideClicks] = useState(1);

  useEffect(() => {
    theMoviesDB
      .post(`movie/top_rated?page=${currentPage}`)
      .then(function (response) {
        setLoading(false);
        setMovies(response.data.results);
      });
  }, [currentPage]);

  const handleResize = () => {
    setMaxCards(calcMaxCards());
  };

  const slideNextClick = () => {
    setCurrentPage(2);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
  }, []);

  return (
    <Flex maxW="full" minH="100vh" bg="blackAlpha.900">
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
              {movies.slice(-maxCards).map(m => (
                <Card
                  h={500}
                  w={cardWidth}
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
            <Button bg="transparent" onClick={slideNextClick}>
              <FaChevronRight color="orange" />
            </Button>
          </HStack>
        </VStack>
      )}
    </Flex>
  );
};
