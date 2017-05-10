import {Component, OnInit} from '@angular/core';
import {HttpService} from "../shared/http.service";
import {IEventCard} from "../shared/interfaces";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    private events: IEventCard[];

    constructor(private httpService: HttpService) {
    }

    ngOnInit() {
        this.httpService.getEventCards(`?locality=Kharkov&limit=10`).subscribe(
            data => {
                this.events = data;
                console.log(this.events);
            }
        );
    }

}
