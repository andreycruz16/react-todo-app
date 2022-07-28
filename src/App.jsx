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
  ListItem,
  UnorderedList,
  useToast,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

function Header() {
  return (
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
          <Button colorScheme="gray">
            <Text fontSize="2em" fontFamily={'Poppins'} fontWeight={'700'} color={'#0f172a'}>
              ?
            </Text>
          </Button>
        </Box>
      </Flex>
    </Box>
  );
}

function SubHeader() {
  return (
    <Box p="4">
      <Flex>
        <Text fontSize="1em" fontFamily={'Poppins'}>
          The simplest way to make a todo lists ⚡
        </Text>
      </Flex>
    </Box>
  );
}

function TodoForm(props) {
  return (
    <Box p="4">
      <form onSubmit={props.handleSubmit(props.onSubmit)}>
        <FormControl isInvalid={props.errors.note}>
          <Flex>
            <Input
              id="note"
              placeholder="Enter a todo item"
              size="lg"
              focusBorderColor="gray.300"
              autoComplete="off"
              {...props.register('note', {
                required: 'This field is required',
                minLength: {
                  value: 3,
                  message: 'Minimum 3 characters',
                },
                maxLength: {
                  value: 50,
                  message: 'Minimum 50 characters',
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
                {props.errors.note && props.errors.note.message}
              </Text>
            </FormErrorMessage>
          </Box>
        </FormControl>
      </form>
    </Box>
  );
}

function TodoList(props) {
  return (
    <Box>
      <Box p="4">
        <Text fontSize="1.5em" fontFamily={'Poppins'} fontWeight={'700'} color={'#0f172a'}>
          todo list 📃
        </Text>
      </Box>
      <Box pl="4" pr={'4'}>
        <UnorderedList>
          {props.items.reverse()?.map((item, index) => (
            <ListItem key={index}>
              <Text fontSize="1.1em" fontFamily={'Poppins'}>
                {item}
              </Text>
            </ListItem>
          ))}
        </UnorderedList>
        {props.items.length === 0 && (
          <Box p="4">
            <Text fontSize="1em" fontFamily={'Poppins'} fontWeight={'300'} color={'#94a3b8'}>
              No items added yet
            </Text>
          </Box>
        )}
      </Box>
    </Box>
  );
}

function App() {
  const [items, setItem] = useState([]);

  const toast = useToast();

  const {
    register,
    handleSubmit,
    reset,
    clearErrors,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setItem((prevItems) => [...prevItems, data.note]);
    showToast('Todo item added successfully', 'success');
    reset();
    clearErrors();
  };

  const showToast = (title, status) => {
    toast({
      title: title,
      description: '',
      status: status,
      duration: 3000,
      isClosable: false,
      position: 'top-right',
    });
  };

  return (
    <div className="App">
      <Box bg="#f1f5f9" h={'100%'}>
        <Center>
          <Box w="740px" bg="#f1f5f9">
            <Header />
            <SubHeader />
            <TodoForm register={register} handleSubmit={handleSubmit} onSubmit={onSubmit} errors={errors} />
            <Divider />
            <TodoList items={items}></TodoList>
          </Box>
        </Center>
      </Box>
    </div>
  );
}

export default App;
