import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
import postReducer from './postReducer';

const rootReducer = combineReducers({
    post: postReducer,
    auth: authReducer,
    form: formReducer
});

export default rootReducer;