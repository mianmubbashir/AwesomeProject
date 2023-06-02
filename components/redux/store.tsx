import { configureStore, Middleware } from "@reduxjs/toolkit";
import rootReducer from './rootReducer';
// import createSagaMiddleware from 'redux-saga';
// import SagaData from "./saga";

// const sagaMiddleware = createSagaMiddleware();

// const middleware: Middleware[] = [sagaMiddleware];

const store = configureStore({ 
  reducer: rootReducer,
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleware)
});

// sagaMiddleware.run(SagaData);

export default store;
