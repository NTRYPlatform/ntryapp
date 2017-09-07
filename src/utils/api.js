'use strict';

class Api {

    static post(url, data) {
        return fetch(url, {
            method: 'GET',
            body: JSON.stringify(data)
        })
    }
}