import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers/index'; // assuming rootreducer is correctly defined

const store = configureStore({
  reducer: rootReducer
});

export default store;
