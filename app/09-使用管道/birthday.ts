import {Component} from '@angular/core'

@Component({
    selector:'birthday',
    template:`{{birthday|date}}`
})

export class BirthdayComponent {
    birthday = new Date(1988,3,15)
}