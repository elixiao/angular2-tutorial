import {Directive, ElementRef, Input, TemplateRef, ViewContainerRef} from '@angular/core'


@Directive({
    selector: '[emoji]'
})

export class EmojiDirective {

    emojiList = [
        '[:smile:]',
        '[:laughing:]',
        '[:blush:]',
        '[:heart_eyes:]',
        '[:smirk:]',
        '[:flushed:]',
        '[:grin:]',
        '[:kissing_smiling_eyes:]',
        '[:wink:]',
        '[:kissing_closed_eyes:]',
        '[:stuck_out_tongue_winking_eye:]',
        '[:sleeping:]',
        '[:worried:]',
        '[:sweat_smile:]',
        '[:cold_sweat:]',
        '[:joy:]',
        '[:sob:]',
        '[:angry:]',
        '[:mask:]',
        '[:scream:]',
        '[:sunglasses:]',
        '[:thumbsup:]',
        '[:clap:]',
        '[:ok_hand:]']

    constructor(private el: ElementRef,
                private templateRef: TemplateRef<any>,
                private viewContainer: ViewContainerRef) {

        console.log(el)
        console.log(templateRef)
        console.log(viewContainer)
    }

    @Input() set emoji(content: string) {
        var view = '<span>真差劲！</span>'
        // this.el.nativeElement
        // this.viewContainer.createEmbeddedView(this.templateRef)
        // this.viewContainer.createEmbeddedView(view)
        // let doc = document;
        // let emojiList = this.emojiList
        // let findEmoji = content.split(/(\[:.*?:\])/)
        // for (let i = 0, len = findEmoji.length; i < len; i++) {
        //     var target = findEmoji[i];
        //     if (~emojiList.indexOf(target)) {
        //         var img = doc.createElement('img');
        //         img.src = 'http://7xsy2w.com1.z0.glb.clouddn.com/emoji/' + target.slice(2, target.length - 2) + '.png';
        //         img.className = 'emoji';
        //         this.el.nativeElement.appendChild(img);
        //     } else {
        //         this.el.nativeElement.appendChild(doc.createTextNode(target));
        //     }
        // }
    }
    // ngAfterViewInit():void {
    //     this.el.nativeElement.focus()
    // }
}

/*

 就是把 Template 变成一个 View，然后放进 ViewContainer 里。
 Angular 2.0 中不再是直接生成 DOM 元素的实例，而是一个更为高层的抽象视图的实例，这里叫做 View。

 */