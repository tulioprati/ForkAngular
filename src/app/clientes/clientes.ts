import { Moment } from 'moment';

export class Cliente {
  id: number;
  tipo: string;
  valor: number;
  descricao: string;
  data?: Moment;
  status?: string;
}
