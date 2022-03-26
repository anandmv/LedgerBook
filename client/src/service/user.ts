function getAuthToken() {
    // return authorization header with jwt token
    let token = localStorage.getItem('token') || '';

    if (token) {
        return `Bearer ${token}`;
    }
    return '';
}

const config = {
    apiUrl: 'http://localhost:8000'
}

function login(email: string, password: string) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    };

    return fetch(`${config.apiUrl}/auth/login`, requestOptions)
        .then((response: { headers: any, json: any; text: () => Promise<any>; ok: any; status: number; statusText: any; }) => {
            const contentType = response.headers.get("content-type");
            if (contentType && contentType.indexOf("application/json") !== -1) {
                return response.json();
            } else {
                return response.text().then(text => {
                    return Promise.reject(text);
                });
            }
        })
        .then(response => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('token', response.token);
            localStorage.setItem('user', JSON.stringify(response.user));
            authProvider.isAuthenticated = true;
            console.log(response)
            return response;
        });
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
    localStorage.removeItem('token');
}

function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: {
            Authorization: getAuthToken()
        }
    };

    return window.fetch(`${config.apiUrl}/users`, requestOptions).then(handleResponse);
}

function handleResponse(response: { text: () => Promise<any>; ok: any; status: number; statusText: any; }) {
    return response.text().then((text: string) => {
        const data = typeof text === 'object' ? JSON.parse(text) : {};
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                window.location.reload();
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}

export const authProvider = {
    isAuthenticated: false,
    async signin(email: string, password: string, callback: (data: any) => void) {
        const response = await login(email, password);
        authProvider.isAuthenticated = true;
        callback(response);
    },
    signout(callback: VoidFunction) {
        logout();
        authProvider.isAuthenticated = false;
        setTimeout(callback, 100);
    },
};

export const userService = {
    login,
    logout,
    getAll,
    authProvider
};