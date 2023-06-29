import axios from 'axios'
import { API_BASE } from '../constants/api';
import { loaderChange } from '../Redux/Authslice';

const apiMiddleware = store => next => action => {

    console.log("this middlware is called ")

    if (next) next(action);
    const { type, payload } = action;

    if (type === 'API') {
        const {
            url,
            data,
            success,
            error,
            hideLoader = false,
            method = 'get'
        } = payload;

        if (!hideLoader)
            store.dispatch(loaderChange(true));

        return axios({
            baseURL: API_BASE, method, url, data
        }).then(res => {

            store.dispatch(loaderChange(false));
            store.dispatch(success(res.data));

            return Promise.resolve(res.data);
        }).catch(err => {

            store.dispatch(loaderChange(false));
            store.dispatch(error(err.response.data));

            return Promise.reject(err.response.data);
        });
    }
}

export default apiMiddleware;