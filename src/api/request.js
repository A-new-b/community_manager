import axio from "axios";
// import {useSnackbar} from "notistack";


// 创建axios实例
const service = axio.create({
    timeout: 20000
});
const serviceFile = axio.create({
    timeout: 180000,
    headers: { "Content-Type": "multipart/form-data" }
});

const err = error => {
    // console.log(error.response);
    return Promise.reject(error);
};

service.interceptors.response.use(response => response, err);
serviceFile.interceptors.response.use(response => response, err);
export { service as axios };
export { serviceFile as axios2 };