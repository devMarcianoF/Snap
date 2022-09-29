import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./component/login/login.component";


const routes: Routes = [
  {path: 'auth/login', component: LoginComponent}
]

@NgModule({
  imports: [
    //Au lieu d'utiliser RouterModule.forRoot()
    // (qui ne doit être appelée qu'une seule fois par votre routeur racine),
    // vous utilisez RouterModule.forChild() pour enregistrer ces routes au routeur déjà créé.
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
