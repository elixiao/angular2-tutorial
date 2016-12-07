import {Observable} from 'rxjs/Observable'
import 'rxjs/add/observable/from'

var ob1 = Observable.from([1,2,3,4,5])
const sub1 = ob1.subscribe(val=>console.log(val))

var promise = new Promise(resolve=>resolve('hello promise'),reject=>reject('rejected!'))
var ob2 = Observable.from(promise)
const sub2 = ob2.subscribe(val=>console.log(val))