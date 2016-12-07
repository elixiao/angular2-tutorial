import {Observable} from 'rxjs/Observable'
import 'rxjs/add/observable/of'
import 'rxjs/add/observable/from'
import 'rxjs/add/observable/interval'


// 先看普通函数的功能
function foo() {
    console.log('Hello')
    return 602
}

var x = foo()
console.log(x)
var y = foo()
console.log(y)

// 再看用Observable实现类似于函数的功能

var bar = Observable.create(function (observer) {
    console.log('Hello')
    observer.next(601)
})

bar.subscribe(x=>console.log(x))
bar.subscribe(y=>console.log(y))

// Observable能返回多个值，拓展函数的功能

var baz = Observable.create(function (observer) {
    console.log('Hello')
    observer.next(503)
    observer.next(502)
    observer.next(501)
    setTimeout(()=> {
        observer.next(601)
    })
})
console.log('before')
baz.subscribe(x=>console.log(x))
console.log('after')

// 调用函数意味着：同步地给我一个值
// observable.subscribe() 意味着不管同步或异步，给我一些值

// Observable生命周期：创建、订阅、执行、终止

// 可观察对象

// 使用create创建Observable
var ob1 = Observable.create(function (observer) {
    observer.next('value')
})

// 使用of创建
var ob2 = Observable.of(1, 2, 3)
ob2.subscribe(x=>console.log(x))

// 使用from创建
var ob3 = Observable.from([1, 2, 3])
ob3.subscribe(x=>console.log(x))

// 使用interval创建
var ob4 = Observable.interval(1000)
ob4.subscribe(x=>console.log(x))


