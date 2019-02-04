import axios from 'axios';

import { API_URL } from '../constants/api';

class API {
    constructor() {
        this.apiUrl = API_URL;
    }

    getUrl = uri => (this.apiUrl + uri);

    getHeaders = options => Object.assign(options, this.options);

    get = async (uri, options) =>
        this.api('get', this.getUrl(uri), null, options);

    api = async (method, url, data, options = {}) => {
        const allOptions = this.getHeaders(options);

        const response = await axios({
            ...allOptions,
            url,
            data,
            method,
        });

        if (response.error) {
            throw new Error(response.error);
        }

        if (response.errors && response.errors[0]) {
            throw new Error(response.errors[0]);
        }

        return response;
    }
}

export default new API();
