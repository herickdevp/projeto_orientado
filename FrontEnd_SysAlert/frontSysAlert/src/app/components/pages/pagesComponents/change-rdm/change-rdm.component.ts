import { Component } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-change-rdm',
  standalone: true,
  imports: [NgIf],
  templateUrl: './change-rdm.component.html',
  styleUrl: './change-rdm.component.css'
})
export class ChangeRdmComponent {
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
