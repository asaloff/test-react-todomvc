import uuid from 'uuid';
import { CREATE_TODO, MARK_COMPLETED, DELETE_ITEM } from './actions';

const initialState = { items: [] };

const todos = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_TODO:
      return {
        ...state,
        items: [
          ...state.items,
          {
            id: uuid(action.data),
            text: action.data,
            completed: false
          }
        ]
      };
    case MARK_COMPLETED:
      return {
        ...state,
        items: state.items.map(item => {
          return item.id === action.id ? { ...item, completed: true } : item;
        })
      };
    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.id)
      };
    default:
      return state;
  }
};

export default todos;
