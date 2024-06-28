import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-header-component',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './header-component.component.html',
  styleUrl: './header-component.component.css'
})
export class HeaderComponentComponent {
logo:string = 'logo.svg';
IconeLogin:string = 'IconeLogin.svg';
logoAlgar:string = 'Algar_Telecom_Logo.svg'

}
