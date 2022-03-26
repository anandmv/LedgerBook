import getAuthToken from "../utils/getAuthToken";
import apiConfig from '../utils/apiConfig';
import handleResponse from "../utils/handleResponse";

function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: {
            Authorization: getAuthToken()
        }
    };

    return window.fetch(`${apiConfig.apiUrl}/accounts`, requestOptions).then(handleResponse);
}

export const accountsService = {
    getAll
};