import {Directive,ElementRef,Input,Renderer,AfterViewInit} from '@angular/core'

@Directive({
    selector:'[fs]'
})

export class FsDirective implements AfterViewInit{
    @Input() fs:number

    constructor(private el:ElementRef,private renderer:Renderer){}

    ngAfterViewInit():void {
        let ne = this.el.nativeElement
        console.log(this.fs)
        console.log(typeof this.fs)
        let fontSize = this.fs||13
        this.renderer.setElementStyle(ne,'fontSize',fontSize.toString())
    }

}