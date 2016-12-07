import {Observable} from 'rxjs/Observable'

var observer = Observable.create((observer)=>{
    observer.next('hello')
})

const sub1 = observer.subscribe(
    val=>console.log(val),
    err=>console.log(err),
    ()=>console.log('complete')
)

const sub2 = observer.subscribe({
    next:(value)=>console.log(value),
    error:(error)=>console.log(error),
    complete:()=>console.log('complete')
})