import { combineSlices, configureStore, combineReducers, legacy_createStore as createStore} from '@reduxjs/toolkit';
import {filtersReducer, tasksReducer} from './slices';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({
  tasks: tasksReducer,
  filters: filtersReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)
 

export const store = createStore(persistedReducer)

export const persistor = persistStore(store)

