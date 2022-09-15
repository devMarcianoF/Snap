import {Injectable} from "@angular/core";
import {FaceSnap} from "../models/face-snap.model";

@Injectable({
  providedIn: 'root'
})

export class FaceSnapsService {
  faceSnaps: FaceSnap[] = [
    {
      id: 0,
      title: "archibald haddock",
      description: "Mon meilleur ami",
      imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      createdDate: new Date(),
      snaps: 227
    },
    {
      id: 1,
      title: "milou",
      description: "OUI oui",
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/2880px-Three_Rock_Mountain_Southern_Tor.jpg',
      createdDate: new Date(),
      snaps: 0,
      location: 'Paris'
    },
    {
      id: 2,
      title: "Ttntin",
      description: "Les aventures",
      imageUrl: 'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
      createdDate: new Date(),
      snaps: 0,
    }
  ]
  getAllFaceSnaps(): FaceSnap[] {
    return this.faceSnaps
  }

  snapFaceSnapById(faceSnapId: number): void {
      //const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === id);
     // if(faceSnap) {
    //    faceSnap.snaps++;
   //   } else {
      //  throw new Error('FaceSnap not found !');
   //   }
  }

}
