import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {"API-KEY": "1f131247-5a03-42d6-abfd-68ff4fdf198c"},

});

export const UsersAPI = {
    getUser(page = 1, pageSize = 10) {
        return instance.get(`users?page=${page}& count =${pageSize}`)
            .then(response => {
                return response.data
            });
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    },
    getProfile(userId) {
        return instance.get(`profile/` + userId)
    }
};

export const authAPI = {
    me() {
        return  instance.get(`auth/me`);
    }
};