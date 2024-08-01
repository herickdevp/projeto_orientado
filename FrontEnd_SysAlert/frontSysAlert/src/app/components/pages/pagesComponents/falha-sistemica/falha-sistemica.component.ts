import { Component, inject } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-falha-sistemica',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './falha-sistemica.component.html',
  styleUrl: './falha-sistemica.component.css'
})
export class FalhaSistemicaComponent {
  iconeAdicionar:string = 'add.svg'; 
  iconeConfig:string = 'config.svg'

  //CONEXÃO COM A API
  public httpClient = inject(HttpClient)
  public falhasSistemicas: Array<any> = []
  public apiUrl = environment.api;
  public nivelUsuario = environment.nivelUsuario;
  
  ngOnInit(){
    this.httpClient.get(this.apiUrl + "falha_sistemica").subscribe({
      next: (data: any) => {
        this.falhasSistemicas = data;
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
