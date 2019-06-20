import { Component, OnInit } from '@angular/core';
import { ModalController, LoadingController, NavController } from '@ionic/angular';
import { ModalvacunasPage } from 'src/app/modals/modalvacunas/modalvacunas.page';
////import { ModalvaqueroPage } from 'src/app/modals/modalvaquero/modalvaquero.page';
import { ActivatedRoute } from '@angular/router';
import { AnimalesService } from 'src/app/service/animales.service';
import { Animal } from 'src/app/models/animal.interface';

@Component({
  selector: 'app-editanimal',
  templateUrl: './editanimal.page.html',
  styleUrls: ['./editanimal.page.scss'],
})

export class EditanimalPage implements OnInit {

  estadoNormal: boolean = false;
  estadoEnfermo: boolean = false;
  estadoCalor: boolean = false;
  estadoGestante: boolean = false;
  //sexo
  estadoMacho: boolean = false;
  estadoHembra:boolean = false;
  //vacia
  estadoCiclando: boolean = false;
  estadoEstatica: boolean = false;

  animal: Animal = {
    nombre: '',
    raza: '',
    nacimiento: '',
    sexoAnimal: '',
    numInt: null,
    numPierna: null,
    siiniga: '',
    padre: '',
    madre: '',
    estado: '',
    ubicacion: '',
    observaciones: '',
    fechadeTransferencia: '',
    vacia: ''
  }

  animalId = null;
  constructor(private modalCtrl: ModalController, 
              private route: ActivatedRoute, 
              private loadingController: LoadingController,
              private aniService: AnimalesService,
              private nav: NavController) { }

  ngOnInit() {
    this.animalId = this.route.snapshot.params['id'];
    if(this.animalId){
      this.loadUsuario();
    }
  }

  async loadUsuario(){
    const loading = await this.loadingController.create({
      message: 'Loading...'
    });
    await loading.present();
    this.aniService.getAnimal(this.animalId).subscribe(res=>{
      loading.dismiss();
      //this.animal = res;
    });
  }

  async guardar(){
    //console.log("Funcion de guardado");
    const loading = await this.loadingController.create({
      message: 'Guardando...'
    });
    await loading.present();

    if(this.animalId){
      //Update
      this.aniService.updateAnimal(this.animal, this.animalId).then(()=>{
        loading.dismiss();
        this.nav.navigateForward('/vaqueros');
      });
    }else{
      //Add new
      this.aniService.addAnimal(this.animal).then(()=>{
        loading.dismiss();
        this.nav.navigateForward('/vaqueros');
      });
    }
  }

  eliminar(){

  }

  async agregarvacuna(){
    const modal = await this.modalCtrl.create({
      component: ModalvacunasPage,
      componentProps: {
        //nombreAnimal: '',//this.animal.nombre;
      }
    });

    await modal.present();

    const { data } = await modal.onDidDismiss();
  }

  selectVacia(){
    switch(this.animal.vacia){
      case 'Ciclando':{
        this.estadoCiclando = true;
        this.estadoEstatica = false;
        break;
      }
      case 'Estatica':{
        this.estadoCiclando = false;
        this.estadoEstatica = true;
        break;
      }
    }
  }
  selectEstado(){
    //let estado = "";
    //this.animal.estado;
    console.log(this.animal.estado);
    switch(this.animal.estado){
      case 'Normal':{
        this.estadoNormal = true;this.estadoEnfermo = false;this.estadoCalor = false;this.estadoGestante = false;
        break;
      }
      case 'Enfermo':{
        this.estadoEnfermo = true;this.estadoNormal = false;this.estadoCalor = false;this.estadoGestante = false;
        break;
      }
      case 'Calor':{
        this.estadoCalor = true;this.estadoNormal = false;this.estadoEnfermo = false;this.estadoGestante = false;
        break;
      }
      case 'Gestante':{
        this.estadoGestante = true;this.estadoNormal = false;this.estadoEnfermo = false;this.estadoCalor = false;
        break;
      }
    }
  }

  selectSexo(){
    //let sexo = "";
    switch(this.animal.sexoAnimal){
      case 'Macho':{
        this.estadoMacho = true;
        this.estadoHembra = false;
        break;
      }
      case 'Hembra':{
        this.estadoMacho = false;
        this.estadoHembra = true;
        break;
      }
    }
  }
}
