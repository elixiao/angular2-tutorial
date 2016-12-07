import {Component} from '@angular/core';

@Component({
    selector: 'root',
    template: `
        <div [bg]="color" fs="18">看背景颜色</div>
        <div [bg]="black" style="color:white">看黑色颜色</div>
        <div [bg]="'black'" [fs]="30" style="color:white">看黑色颜色</div>
        <div bg="'black'" style="color:white">看黑色颜色</div>
        <div bg="black" style="color:white">看黑色颜色</div>
        <div myHighlight="green">看背景颜色</div>
    `
})

export class RootComponent {
    color = 'red'
    // 一定要注意这里双向绑定和单向绑定的区别，如果没有中括号一定是string类型的知道么！
}