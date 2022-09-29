import {Injectable} from "@angular/core";
import {FaceSnap} from "../models/face-snap.model";
import {HttpClient} from "@angular/common/http";
import {Observable, switchMap} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
//Pour les modèles et services, il n'y a pas besoin de les importer ouvertement dans CoreModule :
// les modèles ne sont pas déclarés, et les services se déclarent eux-mêmes avec leurs décorateurs  @Injectable() .
export class FaceSnapsService {

  constructor(private http: HttpClient) {
  }

  faceSnaps$: FaceSnap[] = [];

  getAllFaceSnaps(): Observable<FaceSnap[]> {
    return this.http.get<FaceSnap[]>('http://localhost:3000/facesnaps');
  }

  getFaceSnapById(faceSnapId: number): Observable<FaceSnap> {
    return this.http.get<FaceSnap>(`http://localhost:3000/facesnaps/${faceSnapId}`)
/*    const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
    if(!faceSnap) {
      throw new Error('FaceSnap not found !')
    } else {
      return faceSnap;
    }*/
  }

  snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): Observable<FaceSnap> {
    return this.getFaceSnapById(faceSnapId).pipe(
      map(faceSnap => ({
        ...faceSnap,
        snaps: faceSnap.snaps + (snapType === 'snap' ? + 1 : -1)
      })),
      switchMap(updatedFaceSnap => this.http.put<FaceSnap>(
        `http://localhost:3000/facesnaps/${faceSnapId}`, updatedFaceSnap))
    );

  }

/*  unsnapFaceSnapById(faceSnapId: number): void {
    const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
    if(faceSnap) {
      faceSnap.snaps--;
    } else {
      throw new Error('FaceSnap not found !');
    }
  }*/

  addFaceSnap(formValue: {title: string, description: string, imageUrl: string, location?: string}): Observable<FaceSnap> {
      return this.getAllFaceSnaps().pipe(
        map(faceSnaps => [...faceSnaps].sort((a,b) => a.id - b.id)),
        map(sortedFaceSnap => sortedFaceSnap[sortedFaceSnap.length - 1]),
        map(previousFaceSnap => ({
          ...formValue,
          snaps: 0,
          createdDate: new Date(),
          id: previousFaceSnap.id + 1
        })),
        switchMap(newFaceSnap => this.http.post<FaceSnap>('http://localhost:3000/facesnaps', newFaceSnap))
      );
  }


}
