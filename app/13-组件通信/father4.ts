import {Component} from '@angular/core'

@Component({
    selector:'father4',
    template:`
<h2>Should mankind colonize the Universe?</h2>
<h3>Agree:{{agreed}},Disagree:{{disagreed}}</h3>
<child4 *ngFor="let voter of voters" [name]="voter" (onVoted)="onVoted($event)"></child4>
`,
    styles:[``]
})

export class Father4Component {
    agreed = 0
    disagreed = 0
    voters = ['Tom','David','Jimmy']

    onVoted(agreed:boolean) {
        agreed?this.agreed++:this.disagreed++
    }
}