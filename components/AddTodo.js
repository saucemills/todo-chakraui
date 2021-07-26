import { HStack, Input, Button, useToast } from '@chakra-ui/react';
import { useState } from 'react';
import { nanoid } from 'nanoid';

function AddTodo({ addTodo }) {
  const toast = useToast();
  const [body, setBody] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (!body) {
      toast({
        title: 'No Content.',
        status: 'error',
        duration: 2000,
        isClosable: true,
      });
      return;
    }
    const newTodo = {
      id: nanoid(),
      body,
    };
    addTodo(newTodo);
    setBody('');
  }
  return (
    <form onSubmit={handleSubmit}>
      <HStack mt='8'>
        <Input
          variant='filled'
          placeholder='Add todo here...'
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <Button colorScheme='red' px='8' type='submit'>
          Add Todo
        </Button>
      </HStack>
    </form>
  );
}

export default AddTodo;
