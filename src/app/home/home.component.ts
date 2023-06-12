import {Component, OnInit} from '@angular/core';
import {Moment} from 'moment';
import {ClientesService} from '../clientes.service';
import {Cliente} from '../clientes/clientes';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  initialDate: Moment;
  finalDate: Moment;
  earning: number = 0;
  out: number = 0;
  saving: number = 0;
  clientes: Cliente[];

  constructor(private service: ClientesService) {
  }

  ngOnInit(): void {
    this.service.getClientes().subscribe(resposta => {
      this.clientes = resposta;
      this.filterValueClientByType();
    });

  }

  filterValueClientByType() {
    for (var i = 0; i < this.clientes.length; i++) {
      var conta = this.clientes[i];

      if (conta.tipo === 'Entrada') {
        this.earning += conta.valor;
      } else if (conta.tipo === 'Saída') {
        this.out += conta.valor;
      }else{
        this.saving += conta.valor;
      }
    }
  }
}
