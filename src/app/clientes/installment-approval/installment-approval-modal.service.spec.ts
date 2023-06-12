import { TestBed } from '@angular/core/testing';

import { InstallmentApprovalModalService } from './installment-approval-modal.service';

describe('InstallmentEditorModalService', () => {
  let service: InstallmentApprovalModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InstallmentApprovalModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
