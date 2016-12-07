## RxJS入门

安装rxjs：

```
npm install @reactivex/rxjs --save
```




变量命名约定

- Observable变量以`$`结尾，如state$
- Subject变量以`$$`结尾，如state$$
- Subscription变量以`_`结尾，如ultimate_

那究竟什么是Observable、Subject和Subscription呢？

### Observer

一个有3种callback的Object：

```javascript
const observer = {
    next: (value)=> console.log(value),
    error: (error)=> console.log(error),
    complete: ()=> console.log('completed')
}
```

### Observable

Observable好似一个函数，有很多return的函数，定义了在哪个时点return什么数据，好比这样：

```javascript
const x$ = ()=> {
    //处理
    return A;
    //处理
    return B;
    //处理
    return C;
}
```

但函数是不可能返回多次的，实际上的写法是这样：

```javascript
const x$ = (observer)=>{
    //处理
    observer.next(A)
    //处理
    observer.next(B)
    //处理
    observer.error(C)
}
```

用observer的callback来代替return。那如何调用Observable呢？

通过subscribe方法，即：x$.subscribe(observer)来启动x$的运行。


Observable.fromEvent可以方便的衔接事件。
投影：map、flatMap
过滤：filter,distinctUltilChanges
错误处理：catch、retry、finally
减压：debounce、throttle、sample、pausable


Observable.range：发射一定数量值得序列。
Observable.toArray: 在序列完成时将所有发射值转换为一个数组。
Observable.flatMap: 将原始序列流中的元素转化为一个新的序列流，并将这个新的序列流merge到原来的序列中元素的位置。
Observable.startWith: 它会设置Observable序列的第一个值
Observable.combineLatest: 类似于promiseAll，在所有序列有结果后才会执行
Observable.scan: 将序列中每次发射的值可以做聚合，与reduce类似，reduce会将整个序列的值聚合起来，在序列完成时发送一个最终值
Observable.sample: 从持续的序列中取得一定的样品
Observable.merge：将多个序列合并成一个，可以做OR来使用
Observable.timestamp: 能够得到每个发射值的发射时的时间
Observable.distinctUntilChanged(compare, selector): selector取出用来比较的key，compare用来比较两个key
Observable.takeWhile() 当参数为false时停止发射数据

### Subscription

调用Observable的subscribe方法可以启动这个Observable，它返回了一个Object，
这个Object就是Subscription，它唯一的作用就是unsubscribe，有点类似于
setTimeout或setInterval的返回一样，可以取消。


### Subject（主题）

Subject是一个Observable，因此也有subscribe方法,
Subject又是一个Observer，因此也有next方法。

它维护一个observers列表，当subject.subscribe启动Observable的时候，
这个Observable就被加到列表里面，unsubscribe时从列表删掉。

Subject调用subject.next(value)方法的时候，这个value会被forEach给
Subject的observers

Subject是一个可观察的事件流中的生产者。

### Operator


### Scheduler

switchMap操作符是非常智能的，假如发起了多个http请求，可能拥有多个在途的http请求，
并且它们返回的顺序未必就是发送时的顺序。
switchMap保留了原始的请求顺序，并且只返回最近一次http调用返回的可观察对象，
这是因为以前的调用都被取消或丢弃了。
其实取消可观察对象并不会实际中止一个未完成的http请求，除非服务支持这个特性。