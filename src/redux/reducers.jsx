
import { ADD_BOOK } from './actions';
import { dummyBooks } from '../dummyBooks';

const initialState = {
  books: dummyBooks,
};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return {
        ...state,
        books: [...state.books, { ...action.payload, id: state.books.length + 1 }],
      };
    default:
      return state;
  }
};

export default bookReducer;
