// 进行axios封装

import originAxios from "axios";

export function request(options) {
  // 创建axios实例对象
  const instance = originAxios.create({
    baseURL: "http://123.207.32.32:8000/api/hy",
    timeout: 5000
  });

  // 响应拦截
  instance.interceptors.response.use(
    response => {
      // 可以对响应内容进行一些过滤，比如主要用data
      return response.data;
    },
    arr => {
      console.log("响应失败拦截");
      console.log(arr);
      return arr;
    }
  );
  // 发送网络请求
  return instance(options);
}
