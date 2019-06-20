import { Component, OnInit } from '@angular/core';
import { Animal } from '../../models/animal.interface';
import { AnimalesService } from '../../service/animales.service';
import { ActivatedRoute } from '@angular/router';
import { NavController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-infoanimal',
  templateUrl: './infoanimal.page.html',
  styleUrls: ['./infoanimal.page.scss'],
})
export class InfoanimalPage implements OnInit {

  estadoHembra: boolean = false;
  animalId = null;
  animal: Animal={
    nombre: '',
    raza: '',
    nacimiento: '',
    sexoAnimal: '',
    numInt: null,
    siiniga: '',
    padre: '',
    madre: '',
    numPierna:null,
    estado: '',
    ubicacion: '',
    observaciones: '',
    fechadeTransferencia: '',
    vacia: ''
  }

  constructor(public aniService: AnimalesService, 
              public route: ActivatedRoute, 
              public nav: NavController, 
              public loadingCo: LoadingController) { }

  ngOnInit() {
    this.animalId = this.route.snapshot.paramMap.get('id');
    if(this.animalId){
      this.loadAnimal();
    }
  }
  async loadAnimal(){
    const loading = await this.loadingCo.create({
      message: 'Cargando...'
    });
    await loading.present();
    this.aniService.getAnimal(this.animalId).subscribe(res=>{
      loading.dismiss();
      this.animal = res;
    });
  }

  async editar(){
    /*const loading = await this.loadingCo.create({
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
    }*/
  }

}
