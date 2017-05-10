import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {Observable} from "rxjs";
import {IEventCard, IEvent} from "./interfaces";

@Injectable()
export class HttpService {

    private apiUrl: string = 'https://api.kidsvisitor.com/events/';

    constructor(private http: Http) {
    }

    public getEventCards(param: string): Observable<IEventCard[]> {
        return this.http.get(this.apiUrl + param)
            .map((resp: Response) => {
                const response = resp.json();
                return response.results;
            })
            .catch((error: any) => {
                return Observable.throw(error);
            });
    }

    public getEventById(id: string): Observable<IEvent> {
        return this.http.get(this.apiUrl + id)
            .map((resp: Response) => {
                return resp.json();
            })
            .catch((error: any) => {
                return Observable.throw(error);
            });
    }

}