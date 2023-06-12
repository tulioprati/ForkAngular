import {ClientesService} from './../../clientes.service';
import {Cliente} from './../clientes';
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {InstallmentEditorModalService} from '../clientes-form/installment-editor-modal.service';
import {InstallmentApprovalModalService} from './installment-approval-modal.service';

@Component({
  selector: 'app-clientes-lista',
  templateUrl: './installment-approval.component.html',
  styleUrls: ['./installment-approval.component.css']
})
export class InstallmentApprovalComponent implements OnInit {
  clientes: Cliente[];
  clienteSelecionado: Cliente;
  mensagemSucesso: string;
  mensagemErro: string;

  constructor(private service: ClientesService,
              private router: Router,
              private installmentApprovalModalService: InstallmentApprovalModalService
  ) {}

  ngOnInit(): void {
    this.service.getInstallmentApproval().subscribe(resposta => this.clientes = resposta);
  }

  novoCadastro() {
    this.installmentApprovalModalService.show();
  }

  preparaDelecao(cliente: Cliente) {
    this.clienteSelecionado = cliente;
  }

  deletarCliente() {
    this.service.deletar(this.clienteSelecionado)
      .subscribe(
        response => {
          this.mensagemSucesso = 'Cliente deletado';
          this.ngOnInit();
        },
        erro => this.mensagemErro = 'Ocorreu um erro ao deletar o cliente');
  }

  edit(cliente: Cliente){
    this.installmentApprovalModalService.show(cliente);
  }
}
