import { composeWithDevTools } from 'redux-devtools-extension';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { rootReducer } from './reducers';

const PERSIST_KEY = 'proxypay';
const logger = createLogger();

const persistConfig = {
  key: PERSIST_KEY,
  storage,
  whitelist: ['app'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer());
const enhancer = compose(
  applyMiddleware(thunk),
  applyMiddleware(logger),
  composeWithDevTools(applyMiddleware()),
);

export const configureStore = () => {
  const store = createStore(persistedReducer, enhancer);
  const persistor = persistStore(store);
  return { store, persistor };
};
