import {Injectable} from '@angular/core'
import {Subject} from "rxjs/Subject";

@Injectable()
export class MissionService {
    private missionAnnounceSource = new Subject<string>()
    private missionConfirmedSource = new Subject<string>()

    missionAnnounced$ = this.missionAnnounceSource.asObservable()
    missionConfirmed$ = this.missionConfirmedSource.asObservable()

    announceMission(mission:string) {
        this.missionAnnounceSource.next(mission)
    }

    //确认任务
    confirmMission(astronaut:string) {
        this.missionConfirmedSource.next(astronaut);
    }
}

