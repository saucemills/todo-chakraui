import {
  VStack,
  HStack,
  Text,
  IconButton,
  StackDivider,
  Spacer,
  Badge,
} from '@chakra-ui/react';
import { FaTrash } from 'react-icons/fa';

function TodoList({ todos, deleteTodo }) {
  if (!todos.length) {
    return (
      <Badge colorScheme='green' p='4' m='4' borderRadius='lg'>
        No todos at the moment.
      </Badge>
    );
  }
  return (
    <VStack
      divider={<StackDivider />}
      borderColor='gray.200'
      borderWidth='2px'
      padding='4'
      borderRadius='lg'
      w='100%'
      maxW={{ base: '90vw', sm: '80vw', lg: '50vw' }}
      alignItems='stretch'
    >
      {todos.map((todo) => (
        <HStack key={todo.id}>
          <Text>{todo.body}</Text>
          <Spacer />
          <IconButton
            icon={<FaTrash />}
            isRound='true'
            onClick={() => deleteTodo(todo.id)}
          />
        </HStack>
      ))}
    </VStack>
  );
}

export default TodoList;
