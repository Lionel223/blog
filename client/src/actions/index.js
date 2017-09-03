import axios from 'axios';

export const FETCH_USER = 'fetch_user';
export const LOGIN_USER = 'login_user';

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

export const loginUser = (values) => {
    // const res = axios.post('/api/login', values)
    //     .then(() => cb());
    // console.log('aaa');
    // return {
    //     type: LOGIN_USER,
    //     payload: res
    // };

    return (dispatch) => {
        axios.post('/api/login', values)
            // .catch((err) => {
            //     console.log(err);
            // })
            .then((res) => {
                console.log('~~~~');
                console.log(res);
                dispatch({
                    type: LOGIN_USER,
                    payload: res.data
                })
            })
    }
}