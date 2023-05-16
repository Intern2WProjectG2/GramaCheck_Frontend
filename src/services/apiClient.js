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

export const addApp = (data, token) => {
    return axios.post(`${process.env.API_BASE_URL}/addApp`, data, {
        'headers': {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        }
    });
}