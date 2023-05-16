import React from 'react';
import { Button, Card, CardBody, CardFooter, CardHeader, Heading, Text } from '@chakra-ui/react'

const Movies: React.FC = () => {
  return (
    <Card align='center'>
      <CardHeader>
        <Heading size='md'> Customer dashboard</Heading>
      </CardHeader>
      <CardBody>
        <Text>View a summary of all your customers over the last month.</Text>
      </CardBody>
      <CardFooter>
        <Button colorScheme='blue'>View here</Button>
      </CardFooter>
    </Card>
  )
}

export default Movies;