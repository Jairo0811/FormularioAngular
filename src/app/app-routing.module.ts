import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResultadoComponent } from './components/resultado/resultado.component';
import { FormularioComponent } from './components/formulario/formulario.component';

const routes: Routes = [
  { path: '', component: FormularioComponent },
  {
    path: 'resultado/:nombre/:sexualidad/:estadoCivil/:cedula/:telefono',
    component: ResultadoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
