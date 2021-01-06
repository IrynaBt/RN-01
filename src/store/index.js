import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

import { createLogger } from 'redux-logger';

import reducers from '../store/reducers';

const config = {
  key: 'root',
  storage: AsyncStorage,
};

const logger = createLogger({
  collapsed: false,
  duration: true,
});

const appStateMiddleware = () => {
  return ({ dispatch }) => (next) => (action) => {
    return next(action);
  };
};

const reducer = persistReducer(config, reducers);

const store = createStore(reducer, applyMiddleware(thunk, logger, appStateMiddleware()));
const persistor = persistStore(store);

export { store, persistor };
