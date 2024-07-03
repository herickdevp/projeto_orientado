import { Component } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-falha-massiva',
  standalone: true,
  imports: [NgIf],
  templateUrl: './falha-massiva.component.html',
  styleUrl: './falha-massiva.component.css'
})
export class FalhaMassivaComponent {
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
