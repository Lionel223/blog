import axios from 'axios';

export const FETCH_USER = 'fetch_user';
export const LOGIN_USER = 'login_user';

export const ADD_ARTICLE = 'add_article';
export const FETCH_POST = 'fetch_post';
export const FETCH_ACTIVE_POST = 'fetch_active_post';
export const DELETE_POST = 'delete_post';

export const SAVE_COMMENT = 'save_comment';
export const FETCH_COMMENT = 'fetch_comment';

export const fetchUser = () => {
    return (dispatch) => {
        axios.get('/api/current_user')
            .then((res) => {
                dispatch({
                    type: FETCH_USER,
                    payload: res.data
                });
            });
    }
}

export const loginUser = (values, history) => {
    return (dispatch) => {
        axios.post('/api/login', values)
            .then((res) => {
                dispatch({
                    type: LOGIN_USER,
                    payload: res.data
                })
            }).catch(err => {
                console.log(err);
            })
    }
}

export const addArticle = (values, history) => {
    return (dispatch) => {
        axios.post('/api/article', values)
            .then((res) => {
                dispatch({
                    type: ADD_ARTICLE,
                    payload: res.data
                })
                history.push('/');
            }).catch(err => {
                history.push('/');
                console.log(err);
            })
    }
}

export const fetchPost = () => {
    return (dispatch) => {
        axios.get('/api/article')
            .then((res) => {
                dispatch({
                    type: FETCH_POST,
                    payload: res.data
                })
            })
    }
}

export const selectPost = (post) => {
    return (dispatch) => {
        axios.get(`/api/article/${post._id}`)
            .then(res => {
                dispatch({
                    type: FETCH_ACTIVE_POST,
                    payload: res.data
                })                
            })
    }
}

export const deletePost = (id) => {
    return (dispatch) => {
        axios.delete(`/api/article/${id}`)
            .then(res => {
                dispatch({
                    type: DELETE_POST,
                    payload: res.data
                })
            })
    }
}



export const saveComment = (values, history) => {
    return (dispatch) => {
        axios.post('/api/comment',values)
            .then(res => {
                dispatch({
                    type:SAVE_COMMENT,
                    payload: res.data
                })
                history.push('/');
            })
    }
}

export const fetchComment = () => {
    return (dispatch) => {
        axios.get('/api/comment')
            .then(res => {
                dispatch({
                    type: FETCH_COMMENT,
                    payload: res.data
                })
            })
    }
}
