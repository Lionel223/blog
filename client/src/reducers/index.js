import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
import postReducer from './postReducer';
import SinglePostReducer from './singlePostReducer';
import commentReducer from './commentReducer';

const rootReducer = combineReducers({
    post: postReducer,
    singlePost: SinglePostReducer,
    auth: authReducer,
    form: formReducer,
    comment: commentReducer
});

export default rootReducer;