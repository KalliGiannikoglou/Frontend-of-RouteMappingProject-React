import axios from 'axios';

export default axios.create({
    baseURL:'https://d9f3-2a02-587-d85d-ed00-7224-1ad2-1b05-bb7e.ngrok-free.app', 
    headers: {
        'Content-Type': 'application/json'
    }

});