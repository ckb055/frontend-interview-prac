
import axios from 'axios';

const RequestHandler = () => {
    return axios
        .get("https://randomuser.me/api")
        .then(({ data }) => {
            console.log(data);
        })
        .catch((err) => {
            console.error(err);
        });
};

export default RequestHandler;