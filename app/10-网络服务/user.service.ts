import {Injectable} from '@angular/core'
import {Http, Jsonp, URLSearchParams} from "@angular/http";
import 'rxjs/add/operator/toPromise'
import 'rxjs/add/operator/map'


@Injectable()
export class UserService {
    private userUrl = 'http://localhost:3006/users'

    constructor(private http: Http,
                private jsonp: Jsonp) {
    }

    getUsers(): Promise<any> {
        return this.http.get(this.userUrl)
            .toPromise()
            .then(response=>response.json())
            .catch(this.handleError)
    }

    private handleError(error: any): Promise<any> {
        console.log('An error occurred', error)
        return Promise.reject(error.message || error)
    }

    search () {
        // http://ipinfo.io/?callback=getIpData
        let url = 'http://ipinfo.io/';
        let params = new URLSearchParams();
        params.set('action', 'opensearch');
        params.set('format', 'json');
        params.set('callback', 'JSONP_CALLBACK');

        return this.jsonp
            .get(url, { search: params })
            .map(response => response.json())
    }

}

// 注意这里的Injectable()不能少，否则会报错：Can't resolve all parameters for UserService
// 因为在这里引用了Http服务，