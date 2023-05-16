import axios from 'axios';

const getUsers = async () => {
    const requestConfig = {
        method: 'GET',
        url:'http://localhost:9090/users',
        header:{
            'Access-Control-Allow-Origin': '*'
        }
    }

    console.log(requestConfig);

    await axios
    .request(requestConfig)
    .then((response) => {
        console.log(response.data);
    })
    .catch((error) => {
        console.log(error);
    });
}

export {
    getUsers
}