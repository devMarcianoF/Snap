import {Component, OnInit} from '@angular/core';
import {FaceSnap} from "../models/face-snap.model";
import {FaceSnapsService} from "../services/face-snaps.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {

//@Input()  crée comme un attribut HTML auquel on peut lier une valeur, tout comme vous l'avez fait avec l'attribut  src  de l'élément image !
// (en plus de pouvoir utliser la propriété dans son parent (appcomponent dans notre cas)
  faceSnap!: FaceSnap;

  buttonText!: string;

//Afin de récupérer les informations de la route activée, vous allez injecterActivatedRoute
  constructor(private faceSnapsService: FaceSnapsService,
              private route: ActivatedRoute) { }


  ngOnInit () {
    this.buttonText = "Oh Snap!";
//Ensuite, dans  ngOnInit(), vous allez pouvoir récupérer le paramètre id via le snapshot de la route
// (un snapshot est un aperçu instantané d'une valeur qui change au cours du temps)
    const faceSnapId = +this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapsService.getFaceSnapById(faceSnapId);
  }

  onSnap() {
    if (this.buttonText === "Oh Snap!"){
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap');
      this.buttonText = "Oops, un Snap!"
    }
    else {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
      this.buttonText = "Oh Snap!"
    }

  }

}
