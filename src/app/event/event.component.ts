import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {IEvent} from '../shared/interfaces';
import {HttpService} from '../shared/http.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
    selector: 'app-event',
    templateUrl: './event.component.html',
    styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

    private event: IEvent;
    private site = 'https://kidsvisitor.com/';
    private subscription: Subscription;
    private id: string;

    constructor(private activateRoute: ActivatedRoute, private httpService: HttpService) {
        this.subscription = activateRoute.params.subscribe(params => this.id = params['id']);
    }

    ngOnInit() {
        this.httpService.getEventById(this.id).subscribe(
            data => {
                this.event = data;
            }
        );
    }
}
