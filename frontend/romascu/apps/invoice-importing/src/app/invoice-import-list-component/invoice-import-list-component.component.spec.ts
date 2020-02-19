import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceImportListComponentComponent } from './invoice-import-list-component.component';

describe('InvoiceImportListComponentComponent', () => {
  let component: InvoiceImportListComponentComponent;
  let fixture: ComponentFixture<InvoiceImportListComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoiceImportListComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceImportListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
