import * as axios from "axios";

export const usersAPI={
    getUsers(currentPage=1,pageSize=10){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response=>response.data)
    }
}


const instance = axios.create({
    withCredentials:true,
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    headers:{
        "API-KEY":"17d930c6-7812-4054-9716-5b2f0f483c4a"
    }
})

export const getUsers = (currentPage=1,pageSize=10) =>{
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response=>response.data)
}
