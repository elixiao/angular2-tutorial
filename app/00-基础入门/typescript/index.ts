import {HttpConfig} from './http.config'

var http: HttpConfig = {
    protocol: "http",
    host: "localhost",
    port: 3004,
    getUrl() {
        return this.protocol + '://' + this.host + ':' + this.port
    }
}


console.log(http.getUrl())