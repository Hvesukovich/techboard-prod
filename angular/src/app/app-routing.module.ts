import {NgModule} from "@angular/core";
import {RouterModule, PreloadAllModules} from "@angular/router";


const ROUTES = [
 
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES, { useHash: false, preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }


