import axios from 'axios';

export async function sendSlackMessage(data, token) {
    // API call to send slack message
    return axios.post(`${process.env.API_BASE_URL}/getHelp?message=${data}`, {}, {
        'headers': {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        }
    });

}