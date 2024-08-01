import { Component, inject} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { CommonModule, NgIf } from '@angular/common';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-header-component',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, NgIf],
  templateUrl: './header-component.component.html',
  styleUrl: './header-component.component.css'
})

export class HeaderComponentComponent {
logo:string = 'logo.svg'; 
IconeLogin:string = 'IconeLogin.svg';
logoAlgar:string = 'Algar_Telecom_Logo.svg';
logoLogin:string = 'logoLogin.svg';

public nivelUsuario = environment.nivelUsuario; // VARIVAVEL QUE VAI RECEBER NIVEL DO USUÁRIO DO BANCO DE DADOS

//CONEXÃO COM A API
public httpClient = inject(HttpClient)
public usuarios: Array<any> = []
public apiUrl = environment.api;

ngOnInit(){
  this.httpClient.get(this.apiUrl + "usuario").subscribe({
    next: (data: any) => {
      this.usuarios = data;
    }
  })
}


// MODAL LOGIN - (Necessário importar o Input)
isVisible = false;

openModal() {
  this.isVisible = true;
}

closeModal() {
  this.isVisible = false;
}
}
