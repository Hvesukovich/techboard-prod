import {NgModule} from "@angular/core";
import {RouterModule, PreloadAllModules} from "@angular/router";
import {WelcomeUserComponent} from "./components/welcome-user/welcome-user.component";
import {CatalogComponent} from "./components/catalog/catalog.component";
import {GoodComponent} from "./components/good/good.component";


const ROUTES = [
    {path: '', component: WelcomeUserComponent},
    {path: 'catalog/:categories_id', component: CatalogComponent},
    // {path: 'good/:id', component: GoodComponent},
    {path: '**', component: WelcomeUserComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(ROUTES, {useHash: false, preloadingStrategy: PreloadAllModules})],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule {
}


