import { Component, Input} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { CommonModule, NgIf } from '@angular/common';


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

nivelUsuario:number = 2 // VARIVAVEL QUE VAI RECEBER NIVEL DO USUÁRIO DO BANCO DE DADOS

// MODAL LOGIN - (Necessário importar o Input)
isVisible = false;

openModal() {
  this.isVisible = true;
}

closeModal() {
  this.isVisible = false;
}
}
