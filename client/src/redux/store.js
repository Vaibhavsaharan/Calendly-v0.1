import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};
const persistConfig = {
  key: 'root',
  storage,
}
const persistedReducer = persistReducer(persistConfig, rootReducer)
const middleware = [thunk];

export const store = createStore(
  persistedReducer,
  initialState,
  applyMiddleware(...middleware)
);
export const persistor = persistStore(store)

