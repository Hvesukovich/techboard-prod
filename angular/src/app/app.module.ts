import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {AppRoutingModule} from "./app-routing.module";
import {HeaderComponent} from "./components/header/header.component";
import {TopMenuComponent} from "./components/top-menu/top-menu.component";
import {BreadCrumbsComponent} from "./components/bread-crumbs/bread-crumbs.component";
import {LeftMenuComponent} from "./components/left-menu/left-menu.component";
import {WelcomeUserComponent} from "./components/welcome-user/welcome-user.component";
import {WelcomeComponent} from "./components/welcome/welcome.component";
import {FooterComponent} from "./components/footer/footer.component";
import {ListComponent} from "./components/list/list.component";
import {CatalogComponent} from "./components/catalog/catalog.component";
import {ControlsComponent} from "./components/controls/controls.component";


@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        TopMenuComponent,
        BreadCrumbsComponent,
        LeftMenuComponent,
        WelcomeUserComponent,
        WelcomeComponent,
        FooterComponent,
        ListComponent,
        CatalogComponent,
        ControlsComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
