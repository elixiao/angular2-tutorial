import {NgModule}      from '@angular/core';
import {FormsModule}      from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from "./app.component";
import {ConfigComponent} from './创建组件/config'
import {RichComponent} from './创建组件/rich'



// import {RootComponent} from './01-创建组件/root'
import {RootComponent} from './01-双向绑定/root'

@NgModule({
    imports: [BrowserModule,FormsModule],
    declarations: [
        AppComponent,
        RootComponent,
        ConfigComponent,
        RichComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}
