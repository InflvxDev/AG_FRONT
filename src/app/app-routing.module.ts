import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OptimizadorRutasComponent } from './Components/optimizador-rutas/optimizador-rutas.component';

const routes: Routes = [{path: '', component: OptimizadorRutasComponent, pathMatch: 'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
