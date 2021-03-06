import {Component} from '@angular/core'

@Component({
    selector:'father3',
    template:`
<h2>Source code version</h2>
<button (click)="newMinor()">New minor version</button>
<button (click)="newMajor()">New major version</button>
<child3 [major]="major" [minor]="minor"></child3>
`,
    styles:[``]
})

export class Father3Component {
    major:number = 1
    minor:number = 23

    newMinor() {
        this.minor++
    }

    newMajor() {
        this.major++
        this.minor=0
    }
}