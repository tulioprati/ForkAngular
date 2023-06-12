import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';
import { FormsModule } from '@angular/forms';
import { ClientesListaComponent } from './clientes-lista/clientes-lista.component';
import { InstallmentEditorModalComponent } from './clientes-form/installment-editor-modal.component';
import {NgxMaskModule} from 'ngx-mask';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {InstallmentApprovalComponent} from './installment-approval/installment-approval.component';
import {InstallmentApprovalModalComponent} from './installment-approval/installment-approval-modal.component';


@NgModule({
  declarations: [ClientesListaComponent, InstallmentEditorModalComponent,InstallmentApprovalModalComponent,
    InstallmentApprovalComponent],
  imports: [
    CommonModule,
    ClientesRoutingModule,
    FormsModule,
    NgxMaskModule.forChild(),
    MatFormFieldModule,
    MatDatepickerModule,
    MatInputModule
  ],exports: [
    ClientesListaComponent
  ]
})
export class ClientesModule { }
