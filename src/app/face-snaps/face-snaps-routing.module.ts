import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {SingleFaceSnapComponent} from "./component/single-face-snap/single-face-snap.component";
import {FaceSnapListComponent} from "./component/face-snap-list/face-snap-list.component";
import {NewFaceSnapComponent} from "./component/new-face-snap/new-face-snap.component";
import {AuthGuard} from "../core/guards/auth.guard";

const routes: Routes = [
  {path: 'create', component: NewFaceSnapComponent, canActivate:[AuthGuard] },
  { path: ':id', component: SingleFaceSnapComponent, canActivate:[AuthGuard] },
  {path: '', component: FaceSnapListComponent, canActivate:[AuthGuard] }
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
export class FaceSnapsRoutingModule {}
