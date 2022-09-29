import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FaceSnapComponent} from "./component/face-snap/face-snap.component";
import {NewFaceSnapComponent} from "./component/new-face-snap/new-face-snap.component";
import {SingleFaceSnapComponent} from "./component/single-face-snap/single-face-snap.component";
import {FaceSnapListComponent} from "./component/face-snap-list/face-snap-list.component";
import {ReactiveFormsModule} from "@angular/forms";
import {FaceSnapsRoutingModule} from "./face-snaps-routing.module";



@NgModule({
  declarations: [
    FaceSnapComponent,
    NewFaceSnapComponent,
    SingleFaceSnapComponent,
    FaceSnapListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FaceSnapsRoutingModule
  ],
  exports: [
    FaceSnapComponent,
    NewFaceSnapComponent,
    SingleFaceSnapComponent,
    FaceSnapListComponent
  ]
})
export class FaceSnapsModule { }
