import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Client } from '@demo-repo/shared/core-api';
import { CLIENT_SIMPLE_INPUT_FIELDS, CLIENT_SIMPLE_INPUT_FIELDS_TITLES, GENDER_LIST } from '../../constants/client-report';
import { CLIENT_DEFAULT_POSTCODE, CLIENT_IBAN_REGEXP, CLIENT_NAME_EMAIL_REGEXP, CLIENT_NAME_REGEXP } from '../../utils/patterns';

@Component({
  selector: 'app-client-editing-dialog',
  templateUrl: './client-editing-dialog.component.html',
  styleUrls: ['./client-editing-dialog.component.scss']
})
export class ClientEditingDialogComponent {
  client: Client;
  clientForm: FormGroup;
  inputs: (keyof Client)[] = CLIENT_SIMPLE_INPUT_FIELDS;
  inputTitles: string[] = CLIENT_SIMPLE_INPUT_FIELDS_TITLES;
  genderList: string[] = GENDER_LIST;

  constructor(public dialogRef: MatDialogRef<ClientEditingDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private formBuilder: FormBuilder) { // TODO: add data type
    this.client = this.data?.client;

    this.clientForm = this.formBuilder.group({
      nameFormControl: [this.client?.name ? this.client.name : '', Validators.pattern(CLIENT_NAME_REGEXP)],
      genderFormControl: this.client?.gender ? this.client.gender : '',
      birthDateFormControl: this.client?.birthDate ? new Date(this.client.birthDate.replace('/', ' ')) : '',
      ibanFormControl: [this.client?.iban ? this.client.iban : '', Validators.pattern(CLIENT_IBAN_REGEXP)],
      emailFormControl: [this.client?.email ? this.client.email : '', Validators.pattern(CLIENT_NAME_EMAIL_REGEXP)],
      postcodeFormControl: this.client?.postcode ? this.client.postcode : CLIENT_DEFAULT_POSTCODE,
      houseNrFormControl: this.client?.houseNr ? this.client.houseNr : '',
      additionFormControl: this.client?.addition ? this.client.addition : '',
      cityFormControl: this.client?.city ? this.client.city : '',
      countryFormControl: this.client?.country ? this.client.country : '',
    });


  }

  onActionButtonClick() {
    this.dialogRef.close(true);
  }
}
