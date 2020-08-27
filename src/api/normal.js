import {axios} from "./request";

import { URL } from "./baseURL";

export function login(data) {
    return axios({
        url: `${URL}login`,
        method: "post",
        data:data
    });
}

export function notice() {
    return axios({
        url: `${URL}notices`,
        method: "get",
    });
}
export function getInfo(token) {
    return axios({
        headers: {
            'Authorization': 'Bearer ' + token,
        },
        url: `${URL}information`,
        method: "get",
    });
}

export function createAsset(token,info) {
    return axios({
        headers: {
            'Authorization': 'Bearer ' + token,
        },
        url: `${URL}createAsset`,
        data:info,
        method: "post",
    });
}