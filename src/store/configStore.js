import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import authReducer from './reducers/authReducer';

const rootReducer = combineReducers({
    auth: authReducer,
});


const configureStore = () => {
    return createStore(rootReducer);
};

export default configureStore;