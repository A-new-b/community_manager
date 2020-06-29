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
export function blocks() {
    return axios({
        url: `${URL}blocks`,
        method: "get",
    });
}