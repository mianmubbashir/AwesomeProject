import {ADD_TODO, REMOVE_TODO} from './constants';

const initialState: string[] = [];


export const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case REMOVE_TODO:
      let result = state.filter((todos: string) => {
        return todos != action.data;
      });
      return [...result];

    default:
      return state;
  }
};
