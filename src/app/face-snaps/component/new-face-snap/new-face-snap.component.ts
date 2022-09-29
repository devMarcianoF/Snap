import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Observable} from "rxjs";
import {FaceSnap} from "../../../core/models/face-snap.model";
import {map, tap} from "rxjs/operators";
import {FaceSnapsService} from "../../../core/services/face-snaps.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-face-snap',
  templateUrl: './new-face-snap.component.html',
  styleUrls: ['./new-face-snap.component.scss']
})
export class NewFaceSnapComponent implements OnInit {
//Vous allez déclarer la variable qui contiendra l'objet du formulaire.
// Son type est FormGroup (et non NgForm  comme pour les formulaires template) :
  snapForm!: FormGroup;

  //Dans le TypeScript, vous allez créer un Observable
  // faceSnapPreview$  qui émettra des objets de type  FaceSnap  :
  faceSnapPreview$!: Observable<FaceSnap>;
  urlRegex!: RegExp;


//Ensuite, vous allez injecter un outil qui
// simplifie largement la génération des formulaires réactifs, le FormBuilder
  constructor(private fb: FormBuilder,
              private faceSnapsService: FaceSnapsService,
              private router: Router) { }

  ngOnInit(): void {
    this.urlRegex = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)/;

    //Puis, dans ngOnInit(), vous allez utiliser le  FormBuilder pour construire votre formulaire :
    this.snapForm = this.fb.group({
      //Vous utilisez la méthode  group  du FormBuilder
      title: [null, Validators.required],
      description: [null, Validators.required],
      imageUrl: [null, [Validators.required, Validators.pattern(this.urlRegex)]],
      location: [null],
    }, {
      updateOn: "blur",
    })

    // Branchez cet Observable (faceSnapPreview) aux changements de valeur du formulaire avec son attribut  valueChanges,
    // un Observable qui émet la valeur du formulaire à chaque modification :
    this.faceSnapPreview$ = this.snapForm.valueChanges.pipe(
      map(formValue => ({ //on met des parentheses autour de l'objet sinon TS va croire que c les parentheses de la fonction
        ...formValue,
        createdDate: new Date(),
        snaps: 0,
        id: 0
      })),
    );
  }

  onSubmitForm() {
      this.faceSnapsService.addFaceSnap(this.snapForm.value).pipe(
        tap(() => this.router.navigateByUrl('/faceSnaps'))
      ).subscribe()
/*    this.faceSnapsService.addNewFaceSnap(this.snapForm.value);
    this.router.navigateByUrl('/faceSnaps')
    //Comme avec les formulaires template,
    // vous accédez au contenu du formulaire avec l'attribut  value  .
    console.log(this.snapForm.value)*/
  }
}
