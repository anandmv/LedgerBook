import { userConstants } from '../../constants';
import { userService, accountsService, ledgerService } from '../../service';

export const userActions = {
    logout,
    getAll,
    success,
    request,
    failure
};

function request(user: { username: string; }) { return { type: userConstants.LOGIN_REQUEST, user } }
function success(user: any, token: string) { return { type: userConstants.LOGIN_SUCCESS, user, token } }
function failure(error: any) { return { type: userConstants.LOGIN_FAILURE, error } }

function logout() {
    userService.logout();
    return { type: userConstants.LOGOUT };
}

function getAll() {
    return (dispatch: (arg0: { type: string; users?: any; error?: any; }) => void) => {
        dispatch(request());

        userService.getAll()
            .then(
                (users: any) => dispatch(success(users)),
                (error: any) => dispatch(failure(error))
            );
        accountsService.getAll()
            .then(console.log)
        ledgerService.getAll()
            .then(console.log)
    };

    function request() { return { type: userConstants.GETALL_REQUEST } }
    function success(users: any) { return { type: userConstants.GETALL_SUCCESS, users } }
    function failure(error: any) { return { type: userConstants.GETALL_FAILURE, error } }
}