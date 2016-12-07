import {Component,Input,EventEmitter,Output} from '@angular/core'

@Component({
    selector:'child4',
    template:`
<h4>{{name}}</h4>
<button (click)="vote(true)" [disabled]="voted">Agree</button>
<button (click)="vote(false)" [disabled]="voted">Disagree</button>
`,
    styles:[``]
})

export class Child4Component {
    @Input() name:string
    @Output() onVoted = new EventEmitter<boolean>()
    voted = false

    vote(agreed:boolean) {
        this.onVoted.emit(agreed)
        this.voted = true
    }
}