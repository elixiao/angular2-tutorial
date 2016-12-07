import {Observable} from 'rxjs/Observable'
import 'rxjs/add/observable/from'
import 'rxjs/add/observable/of'
import 'rxjs/add/operator/pluck'

const users = [
    {name:'David',age:28},
    {name:'Tom',age:25},
    {name:'Jimmy',age:18},
]

const users$ = Observable.from(users)
    .pluck('name')
users$.subscribe(x=>console.log(x))