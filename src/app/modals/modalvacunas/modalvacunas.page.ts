import { Component, OnInit, Input } from '@angular/core';
import { Vacuna } from 'src/app/models/vacuna.interface';
import { VacunasService } from 'src/app/service/vacunas.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modalvacunas',
  templateUrl: './modalvacunas.page.html',
  styleUrls: ['./modalvacunas.page.scss'],
})
export class ModalvacunasPage implements OnInit {

  //@Input() nombreAnimal;
  vacunas: Vacuna[];
  nombre: string;
  constructor(private vacService: VacunasService,
              private actRout: ActivatedRoute) { }

  ngOnInit() {
    this.nombre = this.actRout.snapshot.paramMap.get('animal');
    this.vacService.getTodo().subscribe(res =>{
      console.log('lista de vacunas: ', res);
      this.vacunas = res;
    });

  }

}
