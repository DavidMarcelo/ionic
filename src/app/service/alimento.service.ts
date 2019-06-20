import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Alimento } from '../models/alimento.interface';

@Injectable({
  providedIn: 'root'
})
export class AlimentoService {

  private todoCollection: AngularFirestoreCollection<Alimento>;
  private listAl: Observable<Alimento[]>;

  constructor(db: AngularFirestore) {
    this.todoCollection = db.collection<Alimento>('ListadeAlimentos');
    this.listAl = this.todoCollection.snapshotChanges().pipe(map(
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
    return this.listAl;
  }

  getFoot(id: string){
    return this.todoCollection.doc<Alimento>(id).valueChanges();
  }

  updateFoot(alim: Alimento, id: string){
    return this.todoCollection.doc(id).update(alim);
  }

  addFoot(alim: Alimento){
    return this.todoCollection.add(alim);
  }

  removeFoot(id: string){
    return this.todoCollection.doc(id).delete();
  }
}
