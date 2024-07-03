import { Component } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-falha-sistemica',
  standalone: true,
  imports: [NgIf],
  templateUrl: './falha-sistemica.component.html',
  styleUrl: './falha-sistemica.component.css'
})
export class FalhaSistemicaComponent {
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
