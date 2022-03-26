import { userConstants } from '../../constants';

interface UserState {
    loggingIn: boolean;
    loggedIn: boolean;
    token: string;
    user: any;
}

const safeParseJSON = (jsonData:string | null): object => {
    try {
        return jsonData ? JSON.parse(jsonData) : {};
    }catch (exception){
        console.warn(exception);
        return {};
    }
}

const user = safeParseJSON(localStorage.getItem('user'));
const token = localStorage.getItem('token') || '';
const initialState: UserState = { loggedIn: !!token,loggingIn: false, user, token };

export function authentication(state = initialState, action: any) {
    switch (action.type) {
        case userConstants.LOGIN_REQUEST:
            return {
                loggingIn: true,
                user: action.user
            };
        case userConstants.LOGIN_SUCCESS:
            return {
                loggedIn: true,
                user: action.user,
                token: action.token
            };
        case userConstants.LOGIN_FAILURE:
            return {};
        case userConstants.LOGOUT:
            return {};
        default:
            return state
    }
}