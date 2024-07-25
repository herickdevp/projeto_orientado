import { changeRdm } from './change-rdm.model';
import { Component, inject } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-change-rdm',
  standalone: true,
  imports: [NgIf, NgFor, HttpClientModule],
  templateUrl: './change-rdm.component.html',
  styleUrl: './change-rdm.component.css'
})
export class ChangeRdmComponent {

  iconeConfig:string = 'config.svg';
  iconeAdicionar:string = 'add.svg'; 

//CONEXÃO COM A API
public httpClient = inject(HttpClient)
public changeRdms: Array<changeRdm> = []
public apiUrl = environment.api;

ngOnInit(){
  this.httpClient.get(this.apiUrl + "change_rdm").subscribe({
    next: (data: any) => {
      this.changeRdms = data;
    }
  })
}

  // MODAL ADICIONAR  - (Necessário importar o Input)
  isVisible = false;
  
  openModal() {
    this.isVisible = true;
  }
  
  closeModal() {
    this.isVisible = false;
  }

  //MODAL EDITAR INFOS
  openConfig(){
    alert("TESTE")
  }
}
