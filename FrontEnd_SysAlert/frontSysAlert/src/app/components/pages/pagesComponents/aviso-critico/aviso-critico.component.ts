import { Component } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-aviso-critico',
  standalone: true,
  imports: [NgIf],
  templateUrl: './aviso-critico.component.html',
  styleUrl: './aviso-critico.component.css'
})
export class AvisoCriticoComponent {
iconeAdicionar:string = 'add.svg'; 


// MODAL ADICIONAR  - (Necessário importar o Input)
isVisible = false;

openModal() {
  this.isVisible = true;
}

closeModal() {
  this.isVisible = false;
}
}
