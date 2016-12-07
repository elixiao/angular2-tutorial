import {NgModule} from '@angular/core'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {BrowserModule} from '@angular/platform-browser'
import {RouterModule} from '@angular/router'
import {HttpModule} from "@angular/http";

import {AppComponent} from "./app.component"
import {ngForComponent, ngIfComponent, clickComponent, classComponent} from './02-内置指令/index'
import {PoorComponent, RichComponent} from './03-创建组件/index'
import {WelcomeComponent} from './04-数据传递/welcome'
import {RedComponent, BlueComponent, NullComponent, RedBlueRoutingModule} from './07-页面路由/index';
import {AppleComponent, BananaComponent, FruitDetailComponent, AppleBananaRoutingModule} from './08-路由参数/index';
import {BirthdayComponent} from './09-使用管道/birthday'
import {
    FatherComponent,
    ChildComponent,
    Father2Component,
    Child2Component,
    Father3Component,
    Child3Component,
    Father4Component,
    Child4Component,
    Father5Component,
    Child5Component,
    MissionControlComponent,
    MissionAstronautComponent,
    Brother1Component,
    Brother2Component,
    Brother1Son1Component,
    Brother1Son2Component,
    Brother1Son3Component,
} from './13-组件通信/index'
import {MyStyleComponent,YourStyleComponent} from './14-组件样式/systemjs/index'
import {HighlightDirective,BgDirective,FsDirective} from './15-属性指令/index'
// import {SubComponent} from './16-服务注入/index'

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
// import {RootComponent} from './11-RxJS入门/root'
// import {RootComponent} from './13-组件通信/root'
// import {RootComponent} from './14-组件样式/systemjs/root'
// import {RootComponent} from './15-属性指令/root'
// import {RootComponent} from './16-服务注入/root'
import {RootComponent} from './17-AoT编译/root'

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        // RedBlueRoutingModule,
        // AppleBananaRoutingModule,
        HttpModule,
    ],
    declarations: [
        AppComponent,
        RootComponent,
        PoorComponent, RichComponent,
        ngForComponent, ngIfComponent, clickComponent, classComponent,
        WelcomeComponent,
        RedComponent, BlueComponent, NullComponent,
        AppleComponent, BananaComponent, FruitDetailComponent,
        BirthdayComponent,
        FatherComponent, ChildComponent, Father2Component, Child2Component, Father3Component, Child3Component, Father4Component, Child4Component, Father5Component, Child5Component, MissionControlComponent, MissionAstronautComponent, Brother1Component, Brother2Component, Brother1Son1Component, Brother1Son2Component, Brother1Son3Component,
        MyStyleComponent,YourStyleComponent,
        HighlightDirective,BgDirective,FsDirective,
        // SubComponent
    ],
    bootstrap: [AppComponent]
})

export class AppModule {
}
