路由是一个可选的外部模块，模块名叫做 RouterModule。

路由的作用是：当用户点击链接或者把URL粘贴到浏览器地址栏时，应该显示哪个视图。

```
{
    path:'apple',
    component:AppleComponnet
}
```

path指定浏览器地址栏中的当前路径，component指定导航到此路由时需要创建的组件。

forRoot方法提供了路由需要的路由服务提供商和指令，并基于当前浏览器URL初始化导航。

在header里面添加`<base href="/">`是不可或缺的

路由插座（outlet）