import {ClientesService} from './../../clientes.service';
import {Cliente} from './../clientes';
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {InstallmentEditorModalService} from '../clientes-form/installment-editor-modal.service';

@Component({
  selector: 'app-clientes-lista',
  templateUrl: './clientes-lista.component.html',
  styleUrls: ['./clientes-lista.component.css']
})
export class ClientesListaComponent implements OnInit {
  clientes: Cliente[];
  clienteSelecionado: Cliente;
  mensagemSucesso: string;
  mensagemErro: string;

  constructor(private service: ClientesService,
              private router: Router,
              private installmentEditorModalService: InstallmentEditorModalService
  ) {}

  ngOnInit(): void {
    this.service.getClientes().subscribe(resposta => this.clientes = resposta);
  }

  novoCadastro() {
    this.installmentEditorModalService.show();
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
    this.installmentEditorModalService.show(cliente);
  }
}
