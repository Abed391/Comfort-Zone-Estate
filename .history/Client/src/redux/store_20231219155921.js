import { configureStore, combineReducers } from '@reduxjs/toolkit';
import userReducer from './user/userSlice';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';


const rootReducer = combineReducers({user: userReducer});

const persistConfig = {
  key: 'root',
  storage,
  version: 1, 
}

import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {},
})