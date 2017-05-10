import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {Routes, RouterModule} from '@angular/router';

import {AppComponent} from './app.component';

import {HttpService} from './shared/http.service';
import {EventComponent} from './event/event.component';
import {HomeComponent} from './home/home.component';

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'event/:id', component: EventComponent},
    {path: '**', component: HomeComponent}
];

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        EventComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [HttpService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
