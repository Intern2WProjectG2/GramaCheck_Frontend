import axios from 'axios';
import { useAuthContext } from "@asgardeo/auth-react";

// axios.interceptors.request.use(async (req) => {
//     console.log('req', req);
//     const {
//         getAccessToken
//     } = useAuthContext();
//     console.log('useAuthContext');

//     var accessToken = await getAccessToken();
//     console.log('accessToken', accessToken);
//     req.headers.Authorization = `Bearer ${accessToken}`;

//     return req;
// });

// Not used.
export const addApp = (data, token) => {
    return axios.post(`${process.env.API_BASE_URL}/addApp`, data, {
        'headers': {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        }
    });
}

export const identitycheck = (data, token) => {
    return axios.get(`${process.env.API_BASE_URL}/identitycheck/${data}`, {
        'headers': {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        }
    });
}

export const validateAddress = (data, token) => {
    return axios.post(`${process.env.API_BASE_URL}/validateAddress`, data, {
        'headers': {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        }
    });
}

export const policecheck = (data, token) => {
    return axios.get(`${process.env.API_BASE_URL}/policecheck/${data}`, {
        'headers': {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        }
    });
}