import {Component} from '@angular/core';
import {EventsService} from "./services/events.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    providers: [EventsService]
})
export class AppComponent {
    source: any[] = [];

    constructor(private events$: EventsService) {
        this.events$
            .fetchItems('100km', 45.4642035, 9.189982, '0000-00-00T00:00:00.000Z')
            .subscribe((items: any[]) => {
                this.source = items;

                console.log(this.source);
            });
    }
}
