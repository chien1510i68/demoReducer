import axios from "axios";
import Cookies from "js-cookie";


// const base_url = ""

const axiosClient = axios.create({
    baseURL : "https://79c1-118-70-132-104.ngrok-free.app",
    headers:{
      'ngrok-skip-browser-warning': '1'
    }
})

// const login_path = ""


//Truoc khi call API
// axios.interceptors.request.use((req) => {
//     //Noi 2 url voi nhau
//     const jwt = Cookies.get("jwt")
//     // const newUrl = base_url + req.url
//     // const Authorization = login_path === req.url ? undefined : `Bearer ${jwt}`
//     return{
//         ...req,
//         // url: newUrl,
//         headers: {
//             ...req.headers,
//             // Authorization,
//             'ngrok-skip-browser-warning': '1'
//         }
//     }
// })

// //Sau khi co response tra ve
// axios.interceptors.response.use((response) => {
//     return response
// }, (err) => {
//     return Promise.reject(err)
// })

// export default axios;

// Add a request interceptor
axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
axios.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });

  export default axiosClient;
