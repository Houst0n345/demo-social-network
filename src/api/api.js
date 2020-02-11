import * as axios from "axios";


const instance = axios.create({
    withCredentials: true,
    headers: {
        'API-KEY': 'd11026be-4baf-4f10-a2a7-8636f4a36bfb'
    },
    baseURL: `https://social-network.samuraijs.com/api/1.0/`
});

export const usersAPI = {
    getUsers(pageNumber = 1, pageSize = 10) {
        return instance.get(`users?page=${pageNumber}&count=${pageSize}`
        ).then(response => {
            return response.data;
        });
    },
    postFollow(userId) {
        return (instance.post(`follow/${userId}`
        )).then(response => {
            return response.data;
        });
    },
    deleteUnfollow(userId) {
        return (instance.delete(`follow/${userId}`
        )).then(response => {
            return response.data;
        });
    }

};

export const securityAPI = {
    getCaptcha() {
        return  instance.get(`security/get-captcha-url`);
    },
};

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    },
    login(email, password, rememberMe = false, captcha=null) {
        return (
            instance.post(`auth/login`, {email, password, rememberMe, captcha})
        )
    },
    logout() {
        return (
            instance.delete(`auth/login`)
        )
    }
};

export const profileAPI = {
    getProfile(userId = 2) {
        return instance.get(`profile/${userId}`)
    },
    getStatus(userId = 2) {
        return instance.get(`profile/status/${userId}`)

    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status: status});
    },
    putImg(file) {
        let formData = new FormData();
        formData.append('image', file);
        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    },
    putProfileInfo(profileInfo) {
        return instance.put(`profile`, profileInfo);
    },
};



