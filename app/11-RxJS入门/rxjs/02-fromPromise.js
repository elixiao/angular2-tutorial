import {Observable} from 'rxjs/Observable'
import 'rxjs/add/observable/fromPromise'


var promise = new Promise(resolve=>resolve('hello promise'),reject=>reject('rejected!'))
var observer = Observable.fromPromise(promise)
const subscribe = observer.subscribe(val=>console.log(val))

