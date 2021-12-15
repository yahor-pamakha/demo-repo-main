import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CLIENT_EDITING_DIALOG_FIELD_LIST } from '../../constants/client-report';
import { ClientEditingForm } from '../model/ClientEditingForm';

@Component({
  selector: 'app-client-editing-dialog',
  templateUrl: './client-editing-dialog.component.html',
  styleUrls: ['./client-editing-dialog.component.scss']
})
export class ClientEditingDialogComponent implements OnInit {
  clientForm: ClientEditingForm;
  testInputs = CLIENT_EDITING_DIALOG_FIELD_LIST;

  constructor(public dialogRef: MatDialogRef<ClientEditingDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.clientForm = new ClientEditingForm(this.data?.client);

  }

  onActionButtonClick() {
    this.dialogRef.close(true);
  }
}
