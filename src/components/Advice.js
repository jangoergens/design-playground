import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {
  Flex,
  Text,
  Heading,
  Button,
  useColorModeValue,
  FormControl,
  Input,
  IconButton,
  ScaleFade,
  useDisclosure,
  Center,
} from '@chakra-ui/react';
import {SearchIcon} from '@chakra-ui/icons';
const getAdvice = async source => {
  const result = await axios
    .get(source)
    .then(res => res.data)
    .catch(error => error);
  return JSON.parse(result + '}').slip.advice;
};
const DailyAdvice = props => {
  const [adviceText, setAdviceText] = useState();
  !adviceText && props.advice.then(res => setAdviceText(res));
  return (
    <Text p="4" rounded={6} background={props.background}>
      {adviceText && adviceText}*
    </Text>
  );
};
const PersonalAdvice = props => {
  const [adviceText, setAdviceText] = useState();
  !adviceText && props.advice.then(res => setAdviceText(res));
  return (
    <Text p="4" rounded={6} background={props.background}>
      {adviceText && adviceText + '*'}
    </Text>
  );
};
const Advice = () => {
  const containerBackground = useColorModeValue('gray.100', 'gray.700');
  const textBackground = useColorModeValue('green.200', 'green.700');
  const {isOpen, onToggle} = useDisclosure();
  const [randomNumber, setRandomNumber] = useState();
  const [searchTerm, setSearchTerm] = useState();
  const handleSearch = e => {
    e.preventDefault();
    setSearchTerm();
  };
  useEffect(() => setRandomNumber(Math.floor(Math.random() * 217)), []);
  return (
    <Flex direction="column" height="100vh" width="100%" align="center">
      <Heading as="h1" textDecoration="underline" p="10">
        Advice
      </Heading>
      <Flex
        direction="column"
        background={containerBackground}
        p={10}
        rounded={6}
      >
        <Heading textStyle="h2" mb={6}>
          Advice of the Day
        </Heading>
        <Center>
          <DailyAdvice
            advice={getAdvice(
              'https://api.adviceslip.com/advice/' +
                new Date().getUTCDate() * 5,
            )}
            background={textBackground}
          />
        </Center>
      </Flex>
      <Flex
        m="10"
        rounded="6"
        background={containerBackground}
        direction="column"
        align="center"
      >
        <Button onClick={onToggle} m="10" colorScheme="teal">
          Personal Advice
        </Button>
        <ScaleFade initialScale={0.8} in={isOpen}>
          <Center>
            {isOpen && (
              <PersonalAdvice
                advice={getAdvice(
                  'https://api.adviceslip.com/advice/' + randomNumber,
                )}
                background={textBackground}
              />
            )}
          </Center>
        </ScaleFade>
      </Flex>

      <Flex
        direction="column"
        display="none"
        background={containerBackground}
        p={10}
        rounded={6}
      >
        <Heading mb="5" textAlign="center">
          Search
        </Heading>
        <Flex as="form">
          <FormControl>
            <Input placeholder="Search Term" />
          </FormControl>
          <IconButton
            ml="3"
            aria-label="Search database"
            icon={<SearchIcon />}
            onClick={handleSearch}
          />
          {searchTerm && (
            <PersonalAdvice
              advice={getAdvice(
                'https://api.adviceslip.com/advice/' + randomNumber,
              )}
              background={textBackground}
            />
          )}
        </Flex>
      </Flex>
      <Heading size="sm" m="2" mt="auto" as="h6">
        *Disclaimer: This advice is not handpicked. Advice is sourced from:
        "https://api.adviceslip.com/"
      </Heading>
    </Flex>
  );
};

export {DailyAdvice, PersonalAdvice, getAdvice};
export default Advice;
