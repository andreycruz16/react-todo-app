import {
  Box,
  Text,
  Center,
  Flex,
  Spacer,
  Button,
  Input,
  Divider,
  FormControl,
  FormErrorMessage,
} from '@chakra-ui/react';
import { ListItem, UnorderedList } from '@chakra-ui/react';
import { useToast } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

// import './App.scss'

function App() {
  const toast = useToast();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    console.log(watch('newNoteInput')); // watch input value by passing the name of it
    showToast('Note added', 'success');
  };

  const showToast = (title, status) => {
    toast({
      title: title,
      description: '',
      status: status,
      duration: 2000,
      isClosable: false,
      position: 'top-right',
    });
  };

  return (
    <div className="App">
      <Box bg="#f1f5f9">
        <Center>
          <Box bg="#f1f5f9" h="100vh" w="740px">
            {/* HEADER */}
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

            {/* SUB HEADER */}
            <Box p="4">
              <Flex>
                <Text fontSize="1em" fontFamily={'Poppins'}>
                  The simplest way to make a todo lists ⚡
                </Text>
              </Flex>
            </Box>

            {/* FORM */}
            {/* <Box p="4">
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
            </Box> */}

            <Box p="4">
              <form onSubmit={handleSubmit(onSubmit)}>
                <FormControl isInvalid={errors.newNoteInput}>
                  <Flex>
                    <Input
                      id="newNoteInput"
                      placeholder="Enter a todo item"
                      size="lg"
                      focusBorderColor="gray.300"
                      autoComplete="off"
                      {...register('newNoteInput', {
                        required: 'This field is required',
                        minLength: {
                          value: 3,
                          message: 'Minimum 3 characters',
                        },
                      })}
                    />
                    <Box ml="5" display="flex" alignItems="center">
                      <Button colorScheme="whatsapp" variant="solid" type="submit">
                        <Text fontSize="1em" fontFamily={'Poppins'} fontWeight={'700'} color={'#fefefe'}>
                          ADD
                        </Text>
                      </Button>
                    </Box>
                  </Flex>
                  <Box display="flex">
                    <FormErrorMessage>
                      <Text fontSize="1em" fontFamily={'Poppins'}>
                        {errors.newNoteInput && errors.newNoteInput.message}
                      </Text>
                    </FormErrorMessage>
                  </Box>
                </FormControl>
              </form>
            </Box>

            <Divider />

            {/* LIST */}
            <Box p="4">
              <Flex>
                <Text fontSize="1.5em" fontFamily={'Poppins'} fontWeight={'700'} color={'#0f172a'}>
                  todo list 📃
                </Text>
              </Flex>
            </Box>
            <Box pl="4" pr={'4'}>
              <Flex>
                <UnorderedList>
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
                </UnorderedList>
              </Flex>
            </Box>
          </Box>
        </Center>
      </Box>
    </div>
  );
}

export default App;
