import {Injectable} from '@angular/core'
import {Http} from '@angular/http'
import 'rxjs/add/operator/toPromise'


@Injectable()
export class SearchService {
    private url = 'http://localhost:3006/users'

    constructor(private http:Http){}

    getNames(name):Promise<Array> {
        return this.http.get(this.url+'?q='+name)
            .toPromise()
            .then((response)=>{
                console.log(response)
                return {
                    data:response.json(),
                    q:name
                }
            })
            .catch(this.handleError)
    }

    private handleError(error:any):Promise<any> {
        console.log('An error occurred',error)
        return Promise.reject(error.message||error)
    }
}