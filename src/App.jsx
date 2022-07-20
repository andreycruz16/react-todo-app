import { Box, Text, Center, Flex, Spacer, Square, Circle, ButtonGroup, Button } from '@chakra-ui/react';
// import './App.scss'

function App() {
  return (
    <div className="App">
      <Box bg="#f1f5f9">
        <Center>
          <Box bg="#f1f5f9" h="100vh" w="740px">
            <Box p="4" bgColor="gray.300">
              <Flex>
                <Text fontSize="2em" fontFamily={'Poppins'} fontWeight={'700'} color={'#0f172a'}>
                  todo
                </Text>
                <Text fontSize="2em" fontFamily={'Poppins'} fontWeight={'300'} color={'#94a3b8'}>
                  .app 📓
                </Text>
                <Spacer />
                <Box display="flex" alignItems="center">
                  <Button
                    onClick={() => {
                      alert('open modal');
                    }}
                  >
                    <Text fontSize="1.5em" fontFamily={'Poppins'} fontWeight={'700'} color={'#94a3b8'}>
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
                <Text fontSize="1.5em" fontFamily={'Poppins'}>
                  List 📃
                </Text>
              </Flex>
            </Box>

            <Box p="4" bgColor="gray.100">
              <Flex>
                <Text fontSize="1.5em" fontFamily={'Poppins'}>
                  Add New ➕
                </Text>
              </Flex>
            </Box>
          </Box>
        </Center>
      </Box>
    </div>
  );
}

export default App;
