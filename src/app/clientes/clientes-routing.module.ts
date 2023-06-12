import { ClientesListaComponent } from './clientes-lista/clientes-lista.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InstallmentApprovalComponent} from './installment-approval/installment-approval.component';


const routes: Routes = [
  { path: 'clientes-lista', component: ClientesListaComponent},
  { path: 'installment-approval', component: InstallmentApprovalComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
