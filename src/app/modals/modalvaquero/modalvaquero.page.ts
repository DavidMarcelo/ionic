import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modalvaquero',
  templateUrl: './modalvaquero.page.html',
  styleUrls: ['./modalvaquero.page.scss'],
})
export class ModalvaqueroPage implements OnInit {

  //@Input() nombreAnimal;

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  /*salirsinargumentos(){
    this.modalCtrl.dismiss();
  }

  salirconargumentos(){
    this.modalCtrl.dismiss({
      nombreAnimal: ''
    });
  }*/

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
  }*/
}
