import { TestBed } from '@angular/core/testing';

import { InstallmentEditorModalService } from './installment-editor-modal.service';

describe('InstallmentEditorModalService', () => {
  let service: InstallmentEditorModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InstallmentEditorModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
