import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Animal } from '../models/animal.interface';

@Injectable({
  providedIn: 'root'
})
export class AnimalesService {

  private todoCollection: AngularFirestoreCollection<Animal>;
  private listAn: Observable<Animal[]>;

  constructor(db: AngularFirestore) {
    this.todoCollection = db.collection<Animal>('ListadeAnimales');
    this.listAn = this.todoCollection.snapshotChanges().pipe(map(
      actions =>{
        return actions.map(a =>{
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      }
    ));
  }

  getTodo(){
    return this.listAn;
  }

  getAnimal(id: string){
    return this.todoCollection.doc<Animal>(id).valueChanges();
  }

  updateAnimal(ani: Animal, id: string){
    return this.todoCollection.doc(id).update(ani);
  }

  addAnimal(ani: Animal){
    return this.todoCollection.add(ani);
  }

  removeAnimal(id: string){
    return this.todoCollection.doc(id).delete();
  }

}
