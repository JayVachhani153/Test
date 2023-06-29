import { API_LOGIN } from "../../constants/api";
import { LOGIN_F, LOGIN_S } from "../../constants/reducerType";

export const loginAction = (data) => ({
    type: "API",
    payload: {
        url: API_LOGIN,
        method: "POST",
        data: data,
        hideLoader: false,
        success: (data) => ({
            type: LOGIN_S,
            payload: data,
        }),
        error: (data) => ({
            type: LOGIN_F,
            payload: {},
        }),
    },
});


export const logoutAction = (data) => ({
    type: "API",
    payload: {
        url: API_LOGIN,
        method: "POST",
        data: data,
        hideLoader: false,
        success: (data) => ({
            type: LOGIN_S,
            payload: data,
        }),
        error: (data) => ({
            type: LOGIN_F,
            payload: {},
        }),
    },
});