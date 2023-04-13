import axios, {AxiosRequestConfig, AxiosResponse} from "axios";

/**
 * 封装全局axios实例
 */
const instance = axios.create({
    baseURL: 'http://localhost:8079/community',
    timeout: 10000,
    withCredentials: true
});

/*function errorHandle(response:AxiosResponse){
    switch (response.status) {
        case 400:
            // 处理错误信息，例如抛出错误信息提示，或者跳转页面等处理方式。
            // return Promise.resolve(error)
            break;
        default:
            throw new Error("未知错误");
    }
}*/

/*
function successHandle(response: AxiosResponse) {
    switch (response.status) {
        case 200:
            //
            return response.data;
        // ....
        default:
            return;
    }
}
*/

/**
 * 请求拦截器
 */
/*instance.interceptors.request.use(
    (config) => {
        // config.headers['X-Token'] = getToken(); // 自定义请求头，如添加token
        return config;
    },
    (error) => {
        console.log('发送请求失败', error);
        // 处理请求错误
        return Promise.resolve(error);
    }
)*/

/**
 * 响应拦截器
 */
instance.interceptors.response.use(
    (response) => {
        // 在响应返回之前做一些处理，如解密等
        switch (response.data.code) {
            case 200:
                return response;
            default:
                return response;
        }

    },
    (error) => {
        console.log('请求响应失败')
        console.log(error);
    }
);

export default instance;

