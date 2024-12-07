import axios from "axios";
import { Validator } from "lumina-form-validator";

class Request {
    #url = '';
    #data = {};
    #config = {};
    #type = '';
    #invalidEntries = {};

    get target() {
        return this.#url
    }

    set target(url) {
        this.#url = url
    }

    get payload() {
        return this.#data
    }

    set payload(payload) {
        this.#data = payload
    }

    get headers() {
        return this.#config
    }

    set headers(headers) {
        this.#config = headers
    }

    get mode() {
        return this.#type
    }

    set mode(type) {
        this.#type = type
    }

    get faults() {
        return this.#invalidEntries
    }

    set faults(data) {
        this.#invalidEntries = data
    }

    validator() {
        const validate = new Validator(this.payload)
        return validate
    }

    errors() {
        return this.faults
    }

    run() {
        let mode = this.mode
        let http

        switch (mode) {
            case "POST" :
                http = axios.post(this.target, this.payload, this.headers)
                break
            case "PUT" :
                http = axios.put(this.target, this.payload, this.headers)
                break
            case "PATCH" :
                http = axios.patch(this.target, this.payload, this.headers)
                break
            case "DELETE" :
                http = axios.delete(this.target, this.headers)
                break
            default :
                http = axios.get(this.target, this.headers)
        }

        return http
    }
}

export default Request