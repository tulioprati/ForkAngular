import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstallmentEditorModalComponent } from './installment-editor-modal.component';

describe('InstallmentEditorModalComponent', () => {
  let component: InstallmentEditorModalComponent;
  let fixture: ComponentFixture<InstallmentEditorModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstallmentEditorModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstallmentEditorModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
