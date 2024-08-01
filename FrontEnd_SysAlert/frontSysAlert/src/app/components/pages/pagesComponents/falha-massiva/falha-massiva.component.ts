import { Component, inject } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import { environment } from '../../../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-falha-massiva',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './falha-massiva.component.html',
  styleUrl: './falha-massiva.component.css'
})
export class FalhaMassivaComponent {
  iconeAdicionar:string = 'add.svg'; 
  iconeConfig:string = 'config.svg'

  //CONEXÃO COM A API
  public httpClient = inject(HttpClient)
  public falhasMassivas: Array<any> = []
  public apiUrl = environment.api;
  public nivelUsuario = environment.nivelUsuario;
  
  ngOnInit(){
    this.httpClient.get(this.apiUrl + "falha_massiva").subscribe({
      next: (data: any) => {
        this.falhasMassivas = data;
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
