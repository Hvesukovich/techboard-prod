import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {AppRoutingModule} from "./app-routing.module";
import {HeaderComponent} from "./components/header/header.component";
import {BreadCrumbsComponent} from "./components/bread-crumbs/bread-crumbs.component";
import {WelcomeUserComponent} from "./components/welcome-user/welcome-user.component";
import {WelcomeComponent} from "./components/welcome/welcome.component";
import {FooterComponent} from "./components/footer/footer.component";
import {ListComponent} from "./components/list/list.component";
import {CatalogComponent} from "./components/catalog/catalog.component";
import {ControlsComponent} from "./components/controls/controls.component";
import { ContentComponent } from './components/content/content.component';
import {CategoriesComponent} from "./components/categories/categories.component";
import { GoodComponent } from './components/good/good.component';
import { UserGoodsComponent } from './components/user-goods/user-goods.component';
import { UserMenuComponent } from './components/user-menu/user-menu.component';
import { GoodsComponent } from './components/goods/goods.component';
import { UserSettingsComponent } from './components/user-settings/user-settings.component';
import { SettingsComponent } from './components/settings/settings.component';
import { UserEditingAnAdComponent } from './components/user-editing-an-ad/user-editing-an-ad.component';
import { EditingAnAdComponent } from './components/editing-an-ad/editing-an-ad.component';
import { UserWishListComponent } from './components/user-wish-list/user-wish-list.component';
import { WishListComponent } from './components/wish-list/wish-list.component';


@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        BreadCrumbsComponent,
        WelcomeUserComponent,
        WelcomeComponent,
        FooterComponent,
        ListComponent,
        CatalogComponent,
        ControlsComponent,
        ContentComponent,
        CategoriesComponent,
        GoodComponent,
        UserGoodsComponent,
        UserMenuComponent,
        GoodsComponent,
        UserSettingsComponent,
        SettingsComponent,
        UserEditingAnAdComponent,
        EditingAnAdComponent,
        UserWishListComponent,
        WishListComponent
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
