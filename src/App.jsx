import { Box, Text, Center, AspectRatio } from '@chakra-ui/react';
// import './App.scss'

function App() {
  return (
    <div className="App">
      <Box bg="#f1f5f9" h="100vh">
        <Box p="4" bgColor="gray.200">
          <Center>
            <Text fontSize="3em" fontFamily={'Poppins'}>
              Todo App ⚡️
            </Text>
          </Center>
        </Box>
        <Box p="2" bgColor="gray.300">
          <Center>
            <Text fontSize="2em" fontFamily={'Poppins'}>
              List 📃
            </Text>
          </Center>
        </Box>
        {/* <Box>
          <AspectRatio ratio={1}>
            <Box bgColor="gray.300" />
          </AspectRatio>
        </Box> */}
      </Box>
    </div>
  );
}

export default App;
