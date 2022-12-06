import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { IndexComponent } from './componentes/index/index.component';

const routes: Routes = [
  {path:'', component: IndexComponent},
  {path: 'experiencia', component: ExperienciaComponent}
  //path del dashboard
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
