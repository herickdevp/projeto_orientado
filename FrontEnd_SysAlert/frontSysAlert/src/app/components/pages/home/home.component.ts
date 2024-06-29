import { Component } from '@angular/core';
import { AvisoCriticoComponent } from '../pagesComponents/aviso-critico/aviso-critico.component';
import { FalhaSistemicaComponent } from '../pagesComponents/falha-sistemica/falha-sistemica.component';
import { FalhaMassivaComponent } from '../pagesComponents/falha-massiva/falha-massiva.component';
import { ChangeRdmComponent } from '../pagesComponents/change-rdm/change-rdm.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AvisoCriticoComponent, FalhaSistemicaComponent, FalhaMassivaComponent, ChangeRdmComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
