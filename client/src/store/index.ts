import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers';

export const store = createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleware
    )
);
export type RootState = ReturnType<typeof store.getState>