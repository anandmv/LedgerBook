function getAuthToken() {
    // return authorization header with jwt token
    let token = localStorage.getItem('token') || '';

    if (token) {
        return `Bearer ${token}`;
    }
    return '';
}
export default getAuthToken;