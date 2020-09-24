import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClimaComponent } from './components/clima/clima.component';
import { CasaDeCambioComponent } from './components/casa-de-cambio/casa-de-cambio.component';
import { TraductorComponent } from './components/traductor/traductor.component';
import { NbaComponent } from './components/nba/nba.component';


const routes: Routes = [
  { path: 'clima', component: ClimaComponent },
  { path: 'conversor', component: CasaDeCambioComponent },
  { path: 'traductor', component: TraductorComponent },
  { path: 'nba', component: NbaComponent },
  
  {path: '**', pathMatch:'full', redirectTo:'clima'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
