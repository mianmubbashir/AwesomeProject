// import UserList from '../UserList';
import { ADD_TODO, REMOVE_TODO} from './constants';

export const addTodo = (todos: string) => {
    return {
      type: ADD_TODO,
      payload: todos,
    };
  };


export function removeTodo (todos: string) {
    return{
        type: REMOVE_TODO,
        data: todos
    }
}

