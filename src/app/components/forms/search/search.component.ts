import {Component, OnInit} from '@angular/core';
import {Subject} from "rxjs";

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
    change$: Subject<KeyboardEvent>;

    constructor() {
        this.change$ = new Subject<KeyboardEvent>();
    }

    ngOnInit(): void {
        this.change$.subscribe((term: any) => console.log('Searching for', term));
    }
}
