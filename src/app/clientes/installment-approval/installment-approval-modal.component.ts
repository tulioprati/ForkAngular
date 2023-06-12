import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Cliente} from '../clientes';
import {ClientesService} from '../../clientes.service';

import * as moment from 'moment';
import {InstallmentApprovalModalService} from './installment-approval-modal.service';


@Component({
  selector: 'app-installment-editor-modal',
  templateUrl: './installment-approval-modal.component.html',
  styleUrls: ['./installment-approval-modal.component.css']
})
export class InstallmentApprovalModalComponent implements OnInit {
  success: boolean = false;
  errors: string[];
  id: number;

  @Input()
  cliente: Cliente;

  constructor(
    private service: ClientesService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private installmentEditorModalService: InstallmentApprovalModalService
  ) {
    this.cliente = new Cliente();
  }

  ngOnInit(): void {
    if(!this.cliente) {
      this.cliente = new Cliente();
    }
  }

  onSubmit() {
    this.cliente.data = moment(this.cliente.data, 'YYYY-MM-DD');
    this.cliente.status = 'Aprovado';

    if (this.id) {
      this.service.atualizar(this.cliente)
        .subscribe(response => {
          this.success = true;
          this.errors = null;
          setTimeout(() => {
            this.installmentEditorModalService.confirm();
          }, 1300);
        }, errorResponse => {
          this.errors = ['Erro ao atualizar o cliente'];
        });
    } else {
      this.service.salvar(this.cliente)
        .subscribe(response => {
          this.success = true;
          this.errors = null;
          this.cliente = response;
          setTimeout(() => {
            this.installmentEditorModalService.confirm();
          }, 1300);
        }, errorResponse => {
          this.success = false;
          this.errors = errorResponse.error.errors;
        });
    }

  }

  cancel(): void{
    this.installmentEditorModalService.dismiss();
  }
}
