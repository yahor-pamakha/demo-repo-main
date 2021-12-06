import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientEditingDialogComponent } from './client-editing-dialog.component';

describe('ClientEditingDialogComponent', () => {
  let component: ClientEditingDialogComponent;
  let fixture: ComponentFixture<ClientEditingDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClientEditingDialogComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientEditingDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
