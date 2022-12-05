import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app.routes';
import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { SearchComponent } from './components/forms/search/search.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        SearchComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
