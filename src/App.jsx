import { Box, Text, Center, Flex, Spacer, Button, Input, Divider } from '@chakra-ui/react';
import { List, ListItem, ListIcon, OrderedList, UnorderedList } from '@chakra-ui/react';
import { useToast } from '@chakra-ui/react';
// import './App.scss'

function App() {
  const toast = useToast();

  const showToast = () => {
    toast({
      title: 'New Item Added',
      description: '',
      status: 'success',
      duration: 9000,
      isClosable: true,
      position: 'top',
    });
  };

  return (
    <div className="App">
      <Box bg="#f1f5f9">
        <Center>
          <Box bg="#f1f5f9" h="100vh" w="740px">
            <Box p="4" mt={'2'} bgColor="gray.300" borderRadius="10">
              <Flex>
                <Text fontSize="2em" fontFamily={'Poppins'} fontWeight={'700'} color={'#0f172a'}>
                  todo
                </Text>
                <Text fontSize="2em" fontFamily={'Poppins'} fontWeight={'300'} color={'#94a3b8'}>
                  .app 📓
                </Text>
                <Spacer />
                <Box display="flex" alignItems="center">
                  <Button variant="ghost">
                    <Text fontSize="2em" fontFamily={'Poppins'} fontWeight={'700'} color={'#0f172a'}>
                      ?
                    </Text>
                  </Button>
                </Box>
              </Flex>
            </Box>

            <Box p="4">
              <Flex>
                <Text fontSize="1em" fontFamily={'Poppins'}>
                  The simplest way to make a todo lists ⚡
                </Text>
              </Flex>
            </Box>

            <Box p="4">
              <Flex>
                <Input placeholder="Enter something" size="lg" focusBorderColor="whatsapp.500" />
                <Box ml="5" display="flex" alignItems="center">
                  <Button colorScheme="whatsapp" variant="solid" onClick={showToast}>
                    <Text fontSize="1em" fontFamily={'Poppins'} fontWeight={'700'} color={'#fefefe'}>
                      ADD
                    </Text>
                  </Button>
                </Box>
              </Flex>
            </Box>

            <Divider />

            <Box p="4">
              <Flex>
                <Text fontSize="1.5em" fontFamily={'Poppins'} fontWeight={'700'} color={'#0f172a'}>
                  List 📃
                </Text>
              </Flex>
            </Box>

            <Box pl="4" pr={'4'}>
              <Flex>
                <OrderedList>
                  <ListItem>
                    <Text fontSize="1em" fontFamily={'Poppins'}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Text>
                  </ListItem>
                  <ListItem>
                    <Text fontSize="1em" fontFamily={'Poppins'}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Text>
                  </ListItem>
                  <ListItem>
                    <Text fontSize="1em" fontFamily={'Poppins'}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Text>
                  </ListItem>
                </OrderedList>
              </Flex>
            </Box>
          </Box>
        </Center>
      </Box>
    </div>
  );
}

export default App;
