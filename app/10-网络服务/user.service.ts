import {Injectable} from '@angular/core'
import {Http} from "@angular/http";
import 'rxjs/add/operator/toPromise'


@Injectable()
export class UserService {
    private userUrl = 'http://localhost:3006/users'

    constructor(private http:Http) {}

    getUsers():Promise<any> {
        return this.http.get(this.userUrl)
            .toPromise()
            .then(response=>response.json())
            .catch(this.handleError)
    }

    private handleError(error:any):Promise<any> {
        console.log('An error occurred',error)
        return Promise.reject(error.message||error)
    }
}

// 注意这里的Injectable()不能少，否则会报错：Can't resolve all parameters for UserService
// 因为在这里引用了Http服务，