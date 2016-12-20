每个组件都有一个被Angular管理的生命周期，
Angular创建它、渲染它，并且创建和渲染它的子组件，
在当绑定的属性发生变化时检查它，
在当从DOM中移除前销毁它。

ngOnChanges：当被绑定的输入属性的值发生变化时调用

```typescript
Class MyComponent implements OnChanges {
    ngOnChanges(changes) {
        Object.keys(changes).forEach(prop=>{
            console.log(prop,'changed. Previous value',changes[prop].previousValue)
        })
    }
}
```

ngOnInit：首次显示数据绑定和设置指令/组件的输入属性之后，初始化指令/组件。

ngDoCheck：Angular无法或不愿意自己检测变化时调用。在同一指令上不能同时实现doCheck和onChanges钩子。

ngAfterContentInit：当组件的内容全部初始化完成之后，即所有使用ContentChild和ContentChildren装饰的属性都已经初始化完成。

ngAfterContentChecked：对组件进行脏检测完成之后会收到通知。

ngAfterViewInit：当组件视图初始化完成之后，所有使用ViewChild或ViewChildren装饰的属性都已经初始化完成。

ngAfterViewChecked：在组件视图检测完成之后收到通知。

ngOnDestroy：组件销毁阶段进行处理，即组件从组件树上卸载的时候调用次方法。

