import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import promise from 'redux-promise-middleware';
import usersReducer from './reducers/users';

export default createStore(
    usersReducer,
    applyMiddleware(
        logger(),
        promise()
    )
);
