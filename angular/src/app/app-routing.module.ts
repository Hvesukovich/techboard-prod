import {NgModule} from "@angular/core";
import {RouterModule, PreloadAllModules} from "@angular/router";
import {WelcomeUserComponent} from "./components/welcome-user/welcome-user.component";
import {CatalogComponent} from "./components/catalog/catalog.component";
import {GoodComponent} from "./components/good/good.component";
import {UserGoodsComponent} from "./components/user-goods/user-goods.component";
import {UserEditingAnAdComponent} from "./components/user-editing-an-ad/user-editing-an-ad.component";


const ROUTES = [
    {path: '', component: WelcomeUserComponent},
    {path: 'catalog/:categories_id', component: CatalogComponent},
    {path: 'good/:id', component: GoodComponent},
    {path: 'user-goods', component: UserGoodsComponent},
    {path: 'user-editing-an-ad/:categories_id/:good_id', component: UserEditingAnAdComponent},
    {path: 'user-editing-an-ad/:categories_id', component: UserEditingAnAdComponent},
    {path: 'user-editing-an-ad', component: UserEditingAnAdComponent},
    {path: '**', component: WelcomeUserComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(ROUTES, {useHash: false, preloadingStrategy: PreloadAllModules})],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule {
}


