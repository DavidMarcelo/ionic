import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, LoadingController } from '@ionic/angular';
import { Usuario } from '../../models/usuario.interface';
import { UsuarioService } from '../../service/usuario.service';

@Component({
  selector: 'app-editvaquero',
  templateUrl: './editvaquero.page.html',
  styleUrls: ['./editvaquero.page.scss'],
})
export class EditvaqueroPage implements OnInit {

  usuario: Usuario = {
    nombre: '',
    apellido: '',
    nacimiento: '',
    tipo: '',
    correo: '',
    nombreUsuario: '',
    contraUsuario: ''
  }
  usuarioId = null;
  constructor(public usuService: UsuarioService, public activate: ActivatedRoute,
    public navCon: NavController, public loading: LoadingController) { 
    
  }

  ngOnInit() {
    //var f = new Date();
    //console.log(f.getDate()+"/"+f.getMonth()+"/"+f.getFullYear());
    //document.write(f.getDate() + "/" + (f.getMonth() +1) + "/" + f.getFullYear());

    this.usuarioId = this.activate.snapshot.params['id'];
    if(this.usuarioId){
      this.loadUsuario();
    }
  }

  async loadUsuario(){
    const loading = await this.loading.create({
      message: 'Loading...'
    });
    await loading.present();
    this.usuService.getUser(this.usuarioId).subscribe(res=>{
      loading.dismiss();
      this.usuario = res;
    });
  }

  /*async saveUser(){
    const loading = await this.loadingController.create({
      message: 'Saving...'
    });
    await loading.present();

    if(this.animalId){
      //Update
      this.aniService.updateAnimal(this.animal, this.animalId).then(()=>{
        loading.dismiss();
        this.nav.navigateForward('/animals');
      });
    }else{
      //Add new
      this.aniService.addAnimal(this.animal).then(()=>{
        loading.dismiss();
        this.nav.navigateForward('/animals');
      });
    }
  }

  onRemove(idUsuario: string){
    console.log(idUsuario);
    this.aniService.removeAnimal(idUsuario);
  }*/

  tipoUsuario(event){
    console.log("ionselect: "+this.usuario.tipo);
  }

}
