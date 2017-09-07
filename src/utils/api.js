'use strict';

import conf from '../conf/conf';


export default class API {

    static post(url, data) {

        return fetch(conf.backend_api + url, {
            method: 'POST',
            body: JSON.stringify(data)
        })
    }
}

