import {Observable} from 'rxjs/Observable'
import 'rxjs/add/observable/interval'

const observer = Observable.interval(1000)
observer.subscribe(val=>console.log(val))
