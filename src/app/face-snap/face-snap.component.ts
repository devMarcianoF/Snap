import {Component, Input, OnInit} from '@angular/core';
import {FaceSnap} from "../models/face-snap.model";

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit{

  @Input() facesnap!: FaceSnap;

  title!: string;
  description!: string;
  createdDate!: Date;
  snaps!: number;
  imageUrl!: string;
  buttonText!: string;

  ngOnInit () {
    this.title = "Archibald Haddock";
    this.description = "My bff";
    this.createdDate = new Date();
    this.snaps = 65;
    this.imageUrl = 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg';
    this.buttonText = "Oh Snap!";

  }

  onSnap() {
    if ( this.buttonText === "Oh Snap!"){
      this.facesnap.snaps++;
      this.buttonText = "Oops, un Snap!"
    }
    else {
      this.facesnap.snaps--;
      this.buttonText = "Oh Snap!"
    }

  }

}
