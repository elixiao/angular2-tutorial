
第一种情况就是父子组件之间的通信。

何为父子？组件本身如果没有在template中用到其他组件那就是独立、并列的。
如果A组件中用到了B组件，那么A就是B的父组件，B是A的子组件。

父组件传参数给子组件的时候，用中括号表示参数名，后面的变量是参数值。例如：

```html
<child [name]="myName" [age]="myAge"></child>
```


第二种情况是通过setter监听输入值的变化。

传递参数的时候，如果在子组件里面针对这个参数写了set和get方法，那么就可以对参数进行过滤和控制。

```typescript
export class Child {
   _name:string = '<no name set>'
    @Input()
    set name(name:string) {
        this._name = (name&&name.trim()) || '<no name set>'
    }
    get name() {
        return '['+this._name+']'
    }
}
```

第三种情况是监听传入值的变化。

子组件要实现OnChanges接口，监听每一次父组件的变化。

```typescript
ngOnChanges(changes:{[propKey:string]:SimpleChange}) {
    let log:string[] = []
    for(let propName in changes) {
        let changedProp = changes[propName]
        let from = JSON.stringify(changedProp.previousValue)
        let to  = JSON.stringify(changedProp.currentValue)
        log.push(`${propName} changed from ${from} to ${to}`)
    }
    this.changeLog.push(log.join(', '))
}
```

第四种情况是父组件监听子组件的事件。

子组件暴露一个EventEmitter属性，当事件发生时子组件利用该属性emits事件。

```html
<child4 [name]="voter" (onVoted)="onVoted($event)"></child4>
```

这里onVoted是绑定父组件里面的方法，但是参数是从子组件里面传出来的。
前面小括号里面的onVoted是子组件通过Output输出的方法，
后面引号里面的onVoted是调用父组件里面的方法。



第五种情况是在template里面获取子组件的引用，然后调用子组件的方法。

在父组件模板里，新建一个本地变量来代表子组件，然后利用这个变量读取子组件属性，
调用子组件的方法。

```html
<h3>Countdown to Liftoff (via local variable)</h3>
<button (click)="timer.start()">Start</button>
<button (click)="timer.stop()">Stop</button>
<div class="seconds">{{timer.seconds}}</div>
<child5 #timer></child5>
```


```html

```

第六种情况是在class里面获取子组件的引用

如果父组件的类需要读取子组件的属性或调用子组件的方法，就不能使用本地变量方法

```javascript

```

第七种情况是通过服务来通信，这样就不会局限于父子组件之间，而是可以多个组件共享数据。

在家庭内部实现双向通信