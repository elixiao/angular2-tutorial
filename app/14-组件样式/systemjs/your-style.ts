import {Component} from '@angular/core'

@Component({
    moduleId: module.id, //注意如果没有这句话，资源是相对于根路径的
    selector: 'your-style',
    template: `
    <div>
        <a>红色</a>
        <span>蓝色</span>
    </div>
`,
    // styleUrls: ['./app/14-组件样式/your-style.css']
    styleUrls: ['your-style.less']
})

export class YourStyleComponent {
}