import { Component, OnInit } from '@angular/core';
import { Usuario } from '../models/usuario.interface';
import { UsuarioService } from '../service/usuario.service';
import { ActivatedRoute } from '@angular/router';
import { NavController, LoadingController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  //parametro = null;
  //parametro2 = null;
  tipodeUsuario = null;
  usuarios: Usuario[];
  public usuInput: string;
  public conInput: string;
  constructor(private userService: UsuarioService, private route: ActivatedRoute, private nav: NavController, private loadingController: LoadingController, public alertController: AlertController) {
  }

  ngOnInit() {
    this.userService.getTodo().subscribe(res =>{
      console.log('User: ', res);
      this.usuarios = res;
    });
    //console.log('nada: '+this.usuarios);
    //this.parametro2 = this.route.snapshot.paramMap.get('usuario');
    //this.parametro = this.route.snapshot.paramMap.get('usuario');
    //this.parametro+=".png";
  }

  //*ngIf="usuario.tipo==parametro2 && usuario.nombreUsuario==usuarioInput && usuario.contraUsuario==contraseInput"
  //async entrar(tipo: string, nombreUsuario: string, contraUsuario: string){
  async entrar(tUsuarios){
    for(let i=0; i<tUsuarios.length; i++){
      if(tUsuarios[i].nombreUsuario==this.usuInput){
        if(tUsuarios[i].contraUsuario==this.conInput){
          switch(tUsuarios[i].tipo){
            case 'Administrador':{
              this.nav.navigateForward('/manager');
              break;
            }
            case 'Vaquero':{
              this.nav.navigateForward('/tabvaquero/vaquero');
              break;
            }
            case 'Veterinario':{
              this.nav.navigateForward('/vet');
              break;
            }
            case 'Socio':{
              this.nav.navigateForward('/partner');
              break;
            }
          }
        }/*else{
          const alert = await this.alertController.create({
            header: 'Error',
            subHeader: 'Contraseña incorrecta',
            message: 'Por favor, intente de nuevo.',
            buttons: ['Cancel', 'Okay']
          });
          await alert.present();
        }*/
      }/*else{
        const alert = await this.alertController.create({
          header: 'Error',
          subHeader: 'Usuario incorrecto',
          message: 'Por favor, intente de nuevo.',
          buttons: ['Cancel', 'Okay']
        });
        await alert.present();
      }*/
    }
  }

}
