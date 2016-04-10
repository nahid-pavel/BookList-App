import { combineReducers } from 'redux';

import BooksReducer from'./reducer_books';

const rootReducer = combineReducer({

    books: BooksReducer
});


export default rootReducer;
