import { Component, OnInit } from '@angular/core';
import {FaceSnap} from "../models/face-snap.model";
import {FaceSnapsService} from "../services/face-snaps.service";

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit {

  faceSnaps!: FaceSnap[];

//Ajouter un modificateur d'accès comme  public  ou  private
// à un argument du  constructor  crée une propriété avec ce nom-là dans la classe.
// Vous aurez donc accès au service via la propriété  faceSnapsService.

//On préfère généralement  private  pour les injections de service, car
// ça empêche le template du component d'y accéder directement. Donner au
// template accès aux injections serait un anti-pattern Angular – autrement dit,
// une approche plus que déconseillée, souvent pour des raisons qui ne sont pas
// flagrantes au premier abord.
  constructor(private faceSnapsService: FaceSnapsService) { }

  ngOnInit(): void {
  this.faceSnaps = this.faceSnapsService.getAllFaceSnaps();

  }

}
