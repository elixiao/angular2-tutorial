import {NgModule}      from '@angular/core'
import {FormsModule}      from '@angular/forms'
import {BrowserModule} from '@angular/platform-browser'
import {RouterModule} from '@angular/router'
import {HttpModule} from "@angular/http";

import {AppComponent} from "./app.component"
import {ngForComponent,ngIfComponent,clickComponent,classComponent} from './02-内置指令/index'
import {ConfigComponent,RichComponent} from './03-创建组件/index'
import {WelcomeComponent} from './04-数据传递/welcome'
import {RedComponent,BlueComponent,NullComponent,RedBlueRoutingModule} from './07-页面路由/index';
import {AppleComponent,BananaComponent,FruitDetailComponent,AppleBananaRoutingModule} from './08-路由参数/index';
import {BirthdayComponent} from './09-使用管道/birthday'

// import {RootComponent} from './01-双向绑定/root'
// import {RootComponent} from './02-内置指令/root'
// import {RootComponent} from './03-创建组件/root'
// import {RootComponent} from './04-数据传递/root'
// import {RootComponent} from './05-创建服务/root'
// import {RootComponent} from './06-生命周期/root'
// import {RootComponent} from './07-页面路由/root'
// import {RootComponent} from './08-路由参数/root'
// import {RootComponent} from './09-使用管道/root'
// import {RootComponent} from './10-网络服务/root'
import {RootComponent} from './11-RxJS入门/root'


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule,
        // RedBlueRoutingModule,
        // AppleBananaRoutingModule,
        HttpModule,
    ],
    declarations: [
        AppComponent,
        RootComponent,
        ConfigComponent,
        RichComponent,
        ngForComponent,
        ngIfComponent,
        clickComponent,
        classComponent,
        WelcomeComponent,
        RedComponent,
        BlueComponent,
        NullComponent,
        AppleComponent,
        BananaComponent,
        FruitDetailComponent,
        BirthdayComponent
    ],
    bootstrap: [AppComponent]
})

export class AppModule {
}
