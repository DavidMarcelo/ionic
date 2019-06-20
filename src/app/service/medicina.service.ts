import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Medicina } from '../models/medicina.interface';

@Injectable({
  providedIn: 'root'
})
export class MedicinaService {

  private todoCollection: AngularFirestoreCollection<Medicina>;
  private listMe: Observable<Medicina[]>;
  constructor(db: AngularFirestore) {
    this.todoCollection = db.collection<Medicina>('ListadeMedicina');
    this.listMe = this.todoCollection.snapshotChanges().pipe(map(
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
    return this.listMe;
  }

  getMedicine(id: string){
    return this.todoCollection.doc<Medicina>(id).valueChanges();
  }

  updateMedicine(medi: Medicina, id: string){
    return this.todoCollection.doc(id).update(medi);
  }

  addMedicine(medi: Medicina){
    return this.todoCollection.add(medi);
  }

  removeMedicine(id: string){
    return this.todoCollection.doc(id).delete();
  }
}
