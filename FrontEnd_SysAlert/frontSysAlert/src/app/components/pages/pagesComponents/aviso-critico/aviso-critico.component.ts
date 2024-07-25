import { Component, inject } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-aviso-critico',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './aviso-critico.component.html',
  styleUrl: './aviso-critico.component.css'
})
export class AvisoCriticoComponent {
iconeAdicionar:string = 'add.svg'; 

//CONEXÃO COM A API
public httpClient = inject(HttpClient)
public avisosCriticos: Array<any> = []
public apiUrl = environment.api;

ngOnInit(){
  this.httpClient.get(this.apiUrl + "aviso_critico").subscribe({
    next: (data: any) => {
      this.avisosCriticos = data;
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
