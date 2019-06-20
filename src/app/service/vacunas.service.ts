import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Vacuna } from '../models/vacuna.interface';

@Injectable({
  providedIn: 'root'
})
export class VacunasService {

  private todoCollection: AngularFirestoreCollection<Vacuna>;
  private listVa: Observable<Vacuna[]>;

  constructor(db: AngularFirestore) {
    this.todoCollection = db.collection<Vacuna>('ListadeVacunas');
    this.listVa = this.todoCollection.snapshotChanges().pipe(map(
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
    return this.listVa;
  }

  getVacuna(id: string){
    return this.todoCollection.doc<Vacuna>(id).valueChanges();
  }

  updateVacuna(user: Vacuna, id: string){
    return this.todoCollection.doc(id).update(user);
  }

  addVacuna(vac: Vacuna){
    return this.todoCollection.add(vac);
  }

  removeVacuna(id: string){
    return this.todoCollection.doc(id).delete();
  }
}
