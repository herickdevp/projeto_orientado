import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { RelatorioComponent } from './components/pages/relatorio/relatorio.component';
import { CadastroUsuarioComponent } from './components/pages/cadastro-usuario/cadastro-usuario.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'relatorio', component: RelatorioComponent},
    {path: 'cadastro-usuario', component: CadastroUsuarioComponent}
];
