import axios from './request'

import axiosClient from "./request"

// ************* Đăng Nhập **********
export const login = ({userName,password}) =>{
    return axiosClient.post('', {userName, password})
}

// ************* Đăng ký **********
export const register = ({}) =>{
    return axiosClient.post('', {})
}

// *************** User **********
 
// API create User
export const createUser = (values) =>{
    return axiosClient.post('', values)
}

//  get all User 
export const getListUser = ()=>{
    return axiosClient.get('user/all')
} 

//  get detail User 
export const getInforUser = (userId)=>{
    return axiosClient.get(`/user/${userId}`)
}

// Update infor User 
export const updateUser = () =>{
    return axiosClient.put()
}

// Delete each User 
export const deleteUser = () =>{
    return axiosClient.delete(``)
}

//  Delete All User 
export const delAllUser = (ids) =>{
    return axiosClient.delete('/', {data: ids})
}

// Filter infor User
export const filterUser = (values) =>{
    const userValues = {
        start: 0,
        limit: 10,
        userName: values?.userName,
    }
    return axiosClient.post('/user/filter', userValues)
}

// *********** Service *******

// API create Service
export const createService = (values) =>{
    return axiosClient.post('', values)
}

//  get all Service 
export const getListService = ()=>{
    return axiosClient.get('service/all')
} 

//  get detail Service 
export const getInforService = (id)=>{
    return axiosClient.get(`/service/${id}`)
}

// Update infor Service 
export const updateService = () =>{
    return axiosClient.put()
}

// Delete each Service 
export const deleteService = () =>{
    return axiosClient.delete(``)
}

//  Delete All Service 
export const delAllService = (ids) =>{
    return axiosClient.delete('/', {data: ids})
}

// Filter infor Service
export const filterService = (values) =>{
    return axiosClient.post()
}


// *********** News *******

// API create News
export const createNews = (values) =>{
    return axiosClient.post('news', values)
}

//  get all News
export const getListNews = ()=>{
    return axiosClient.get('/news/all')
} 

//  get detail News
export const getInforNews = (id)=>{
    return axiosClient.get(`/news/${id}`)
}

// Update infor News
export const updateNews = (id, values) =>{
    return axiosClient.put(`/news/${id}`, values)
}

// Delete each News
export const deleteNews = (id) =>{
    return axiosClient.delete(`/news/${id}`)
}

//  Delete All News
export const delAllNews = (ids) =>{
    return axiosClient.delete('/news/delete/all', {data: ids})
}

// Filter infor News
export const filterNews = (values) =>{
    return axiosClient.post()
}
