import { Directive, ElementRef, Input, Renderer } from '@angular/core';

@Directive({ selector: '[myHighlight]' })

export class HighlightDirective {

    @Input() myHighlight:string

    //在constructor里面还没有获取到input的数据呢！
    constructor(private el: ElementRef, private renderer: Renderer) {
        renderer.setElementStyle(el.nativeElement, 'backgroundColor', this.myHighlight||'yellow');
        setTimeout(()=>this.later(),3000)
    }

    private later() {
        console.log('执行了')
        console.log(this.myHighlight)
        this.renderer.setElementStyle(this.el.nativeElement, 'backgroundColor', this.myHighlight||'red');
    }
}
