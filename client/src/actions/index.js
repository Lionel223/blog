import axios from 'axios';

export const FETCH_USER = 'fetch_user';
export const LOGIN_USER = 'login_user';

export const ADD_ARTICLE = 'add_article';
export const FETCH_POST = 'fetch_post';

export const FETCH_ACTIVE_POST = 'fetch_active_post';

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
                history.push('/');
            }).catch(err => {
                history.push('/');
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
                    type:FETCH_ACTIVE_POST,
                    payload: res.data
                })
            })
    }

    // app.get('/api/article/:id'
    // console.log(post);
}