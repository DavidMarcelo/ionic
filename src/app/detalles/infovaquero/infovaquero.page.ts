import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario.interface';
import { UsuarioService } from '../../service/usuario.service';
import { ActivatedRoute } from '@angular/router';
import { NavController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-infovaquero',
  templateUrl: './infovaquero.page.html',
  styleUrls: ['./infovaquero.page.scss'],
})
export class InfovaqueroPage implements OnInit {

  /*
  anSexo(){
    console.log('event: ',this.animal.sexoAnimal);
    switch(this.animal.sexoAnimal){
      case 'Hembra':{
        this.vHembra = true;
        break;
      }
      case 'Macho':{
        this.vHembra = false;
        break;
      }
    }
  }

  anEstado(){
    console.log('event: '+this.animal.estado);
    switch(this.animal.estado){
      case 'Enfermo':{
        this.vEnfermo = true;
        this.vNormal = false;
        this.vEncalor = false;
        this.vGestante = false;
        //public visibleAliviada: boolean = false;
        break;
      }
      case 'Calor':{
        this.vEnfermo = false;
        this.vNormal = false;
        this.vEncalor = true;
        this.vGestante = false;
        break;
      }
      case 'Gestación':{
        this.vEnfermo = false;
        this.vNormal = false;
        this.vEncalor = false;
        this.vGestante = true;
        break;
      }
      case 'Normal':{
        this.vEnfermo = false;
        this.vNormal = true;
        this.vEncalor = false;
        this.vGestante = false;
        break;
      }
    }

  }

  anUbicacion(){
    switch(this.animal.ubicacion){
      case 'Pastura':{
        this.vPastura = true; this.vCorral1 = false; this.vCorral2 = false;
        this.vCorral3 = false;this.vCorral4 = false; this.vCorral5 = false;
        this.vCorral6 = false;this.vCorral7 = false; this.vCorral8 = false;
        break;
      }
      case 'Corral 1':{
        this.vPastura = false; this.vCorral1 = true; this.vCorral2 = false;
        this.vCorral3 = false;this.vCorral4 = false; this.vCorral5 = false;
        this.vCorral6 = false;this.vCorral7 = false; this.vCorral8 = false;
        break;
      }
      case 'Corral 2':{
        this.vPastura = false; this.vCorral1 = false; this.vCorral2 = true;
        this.vCorral3 = false;this.vCorral4 = false; this.vCorral5 = false;
        this.vCorral6 = false;this.vCorral7 = false; this.vCorral8 = false;
        break;
      }
      case 'Corral 3':{
        this.vPastura = false;this.vCorral1 = false; this.vCorral2 = false;
        this.vCorral3 = true; this.vCorral4 = false; this.vCorral5 = false;
        this.vCorral6 = false;this.vCorral7 = false; this.vCorral8 = false;
        break;
      }
      case 'Corral 4':{
        this.vPastura = false;this.vCorral1 = false; this.vCorral2 = false;
        this.vCorral3 = false; this.vCorral4 = true; this.vCorral5 = false;
        this.vCorral6 = false;this.vCorral7 = false; this.vCorral8 = false;
        break;
      }
      case 'Corral 5':{
        this.vPastura = false;this.vCorral1 = false; this.vCorral2 = false;
        this.vCorral3 = false;this.vCorral4 = false; this.vCorral5 = true;
        this.vCorral6 = false;this.vCorral7 = false; this.vCorral8 = false;
        break;
      }
      case 'Corral 6':{
        this.vPastura = false;this.vCorral1 = false; this.vCorral2 = false;
        this.vCorral3 = false;this.vCorral4 = false; this.vCorral5 = false;
        this.vCorral6 = true; this.vCorral7 = false; this.vCorral8 = false;
        break;
      }
      case 'Corral 7':{
        this.vPastura = false;this.vCorral1 = false; this.vCorral2 = false;
        this.vCorral3 = false;this.vCorral4 = false; this.vCorral5 = false;
        this.vCorral6 = false; this.vCorral7 = true; this.vCorral8 = false;
        break;
      }
      case 'Corral 8':{
        this.vPastura = false;this.vCorral1 = false; this.vCorral2 = false;
        this.vCorral3 = false;this.vCorral4 = false; this.vCorral5 = false;
        this.vCorral6 = false;this.vCorral7 = false; this.vCorral8 = true;
        break;
      }
    }
  } */
  usuario: Usuario = {
    nombre: '',
    apellido: '',
    nacimiento: '',
    tipo: '',
    correo: '',
    nombreUsuario: '',
    contraUsuario: ''
  }
  public edad = null;
  usuarioId = null;
  constructor(private route: ActivatedRoute,
              private nav: NavController,
              private userService: UsuarioService,
              private loadingController: LoadingController) { }

  ngOnInit() {
    this.usuarioId = this.route.snapshot.params['id'];
    if(this.usuarioId){
      this.loadUsuario();
    }
  }

  async loadUsuario(){
    const loading = await this.loadingController.create({
      message: 'Loading...'
    });
    await loading.present();
    this.userService.getUser(this.usuarioId).subscribe(res=>{
      loading.dismiss();
      this.usuario = res;
    });
  }

}
