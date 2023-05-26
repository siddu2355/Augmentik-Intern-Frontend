import http from './httpService'

export function registerProfile(profile) {
    const jwt = sessionStorage.getItem("jwt")
    return http.post('api/details/', profile, {
        method: "post",
        headers: {
            'x-auth-token': `${jwt}`,
        }
    })
}

export function getMembers() {
    return http.get('api/details/')
}