import {Injectable} from '@angular/core'
import {Http} from '@angular/http'
import 'rxjs/add/operator/toPromise'
import {Observable} from "rxjs";


@Injectable()
export class SearchService {
    private url = 'http://localhost:3006/users'

    constructor(private http:Http){}

    // Angular 的 http.get 返回一个 RxJS 的 Observable 对象。
    // Observable( 可观察对象 ) 是一个管理异步数据流的强力方式。
    // 利用toPromise操作符可以把Observable转换为promise


    getNames(name):Promise<any> {
        return this.http
            .get(this.url+'?q='+name)
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

    // Observable.fromPromise(promise)将Promise转换为可观察对象
    // 请求并非总是一次性的，我们可以开始一个请求，然后取消它，再开始另一个不同的请求

    // search(term:string):Observable {
    //     return this.http
    //         .get(this.url+'?q='+term)
    // }


    private handleError(error:any):Promise<any> {
        console.log('An error occurred',error)
        return Promise.reject(error.message||error)
    }
}