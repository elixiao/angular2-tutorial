import {Directive,ElementRef,Input,Renderer,AfterViewInit} from '@angular/core'

@Directive({
    selector:'[bg]'
})

export class BgDirective implements AfterViewInit{
    @Input() bg:string

    constructor(private el:ElementRef,private renderer:Renderer){}

    ngAfterViewInit():void {
        let ne = this.el.nativeElement
        console.log(this.bg)
        let color = this.bg||'gray'
        this.renderer.setElementStyle(ne,'backgroundColor',color)
    }

}