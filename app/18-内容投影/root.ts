import {Component} from '@angular/core';

@Component({
    selector: 'root',
    template: `
        <diy-button>
          我的<span [style.color]="color">按钮</span>
        </diy-button>
        <!--<diy-panel>-->
            <!--<div diy-panel-title>-->
                <!--<b>panel标题</b>-->
            <!--</div>-->
            <!--<div diy-panel-content>-->
                <!--<i>panel内容</i>-->
            <!--</div>-->
        <!--</diy-panel>-->
        
通过属性的方式不够语意化，如果能够直接用diy-panel-title和diy-panel-content标签就好了，但是这样会报错，说：
        
<pre>
Template parse errors:
'diy-panel-title' is not a known element:
1. If 'diy-panel-title' is an Angular component, then verify that it is part of this module.
2. If 'diy-panel-title' is a Web Component then add "CUSTOM_ELEMENTS_SCHEMA" to the '@NgModule.schemas' of this component to suppress this message.
</pre>

意思是说diy-panel-title这个组件并不存在，如果确实是一个web组件的话，在@NgModule.schemas里面添加CUSTOM_ELEMENTS_SCHEMA。
        
        <diy-panel>
            <diy-panel-title>
                <b>panel标题</b>
            </diy-panel-title>      
            <diy-panel-content>
                <i>panel内容</i>
            </diy-panel-content>
        </diy-panel>
        
        <diy-user></diy-user>
        
        <diy-tabs>
            <diy-tab-title>第1个</diy-tab-title>
            <diy-tab-content>第1个内容</diy-tab-content>
            <diy-tab-title>第2个</diy-tab-title>
            <diy-tab-content>第2个内容</diy-tab-content>
            <diy-tab-title>第3个</diy-tab-title>
            <diy-tab-content>第3个内容</diy-tab-content>
        </diy-tabs>
    `
})

export class RootComponent {
    color = 'red'
}