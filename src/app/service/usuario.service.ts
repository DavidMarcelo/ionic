import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Usuario } from '../models/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private todoCollection: AngularFirestoreCollection<Usuario>;
  private listUs: Observable<Usuario[]>;

  constructor(db: AngularFirestore) {
    this.todoCollection = db.collection<Usuario>('ListadeUsuarios');
    this.listUs = this.todoCollection.snapshotChanges().pipe(map(
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
    return this.listUs;
  }

  getUser(id: string){
    return this.todoCollection.doc<Usuario>(id).valueChanges();
  }

  updateUser(user: Usuario, id: string){
    return this.todoCollection.doc(id).update(user);
  }

  addUser(user: Usuario){
    return this.todoCollection.add(user);
  }

  removeUser(id: string){
    return this.todoCollection.doc(id).delete();
  }
}
