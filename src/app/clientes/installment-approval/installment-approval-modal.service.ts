import {Injectable} from '@angular/core';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {InstallmentApprovalModalComponent} from './installment-approval-modal.component';
import {Cliente} from '../clientes';

@Injectable({providedIn: 'root'})
export class InstallmentApprovalModalService {
  private isOpen = false;
  private instance?: NgbModalRef;

  constructor(private modalService: NgbModal) {
  }

  show(
    cliente?: Cliente
  ): void {
    if (this.isOpen) {
      return;
    }

    this.isOpen = true;

    this.instance = this.modalService.open(InstallmentApprovalModalComponent, {
      size: 'lg',
      backdrop: 'static'
    });
    this.instance.componentInstance.cliente = cliente;
    this.instance.componentInstance.confirm = confirm;


    this.instance.result.finally(() => (this.isOpen = false));
  }

  confirm(): void {
    if (!this.isOpen || !this.instance) {
      return;
    }
    this.instance.close();
  }

  dismiss(): void {
    if (!this.isOpen || !this.instance) {
      return;
    }
    this.instance.dismiss();
  }
}
