import {Component, Input, OnInit} from '@angular/core';
import {FaceSnap} from "../models/face-snap.model";
import {FaceSnapsService} from "../services/face-snaps.service";

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit{
//@Input()  crée comme un attribut HTML auquel on peut lier une valeur, tout comme vous l'avez fait avec l'attribut  src  de l'élément image !
// (en plus de pouvoir utliser la propriété dans son parent (appcomponent dans notre cas)
  @Input() faceSnap!: FaceSnap;

  buttonText!: string;

  constructor(private faceSnapsService: FaceSnapsService) { }


  ngOnInit () {
    this.buttonText = "Oh Snap!";
  }

  onSnap() {
    if ( this.buttonText === "Oh Snap!"){
      this.faceSnap.snaps++;
      this.buttonText = "Oops, un Snap!"
    }
    else {
      this.faceSnap.snaps--;
      this.buttonText = "Oh Snap!"
    }

  }

}
