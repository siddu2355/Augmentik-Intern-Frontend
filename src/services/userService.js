import http from "./httpService"

export function registerUser(user) {
    return http.post("api/register/", {
        email: user.email,
        password:user.password
    })
}

export function LoginUser(user) {
    return http.post("api/login/", {
        email: user['email'],
        password:user['password'],
    })
}