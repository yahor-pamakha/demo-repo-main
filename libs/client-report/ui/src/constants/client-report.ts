import { ClientEditingForm } from '../lib/model/ClientEditingForm';
import { Client } from '@demo-repo/shared/core-api';

export const CLIENT_REPORT_COLUMNS: (keyof Client)[] = [
  'name',
  'gender',
  'birthDate',
  'iban',
  'email',
  'address',
];

export const CLIENT_EDITING_DIALOG_FIELD_LIST = [
  {
    title: 'Name',
    inputType: 'text',
    formControl: 'nameFormControl' as keyof ClientEditingForm,
  },
  {
    title: 'Gender',
    formControl: 'genderFormControl' as keyof ClientEditingForm,
    inputType: 'select',
  },
  {
    title: 'Birth Date',
    formControl: 'birthDateFormControl' as keyof ClientEditingForm,
    inputType: 'datePicker',
  },
  {
    title: 'IBAN',
    formControl: 'ibanFormControl' as keyof ClientEditingForm,
    inputType: 'text',
  },
  {
    title: 'Email Address',
    formControl: 'emailFormControl' as keyof ClientEditingForm,
    inputType: 'text',
  },
  {
    title: 'Post Code',
    formControl: 'postcodeFormControl' as keyof ClientEditingForm,
    inputType: 'text',
  },
  {
    title: 'House no. | addition',
    formControl: 'houseNrFormControl' as keyof ClientEditingForm,
    inputType: 'text',
  },
  {
    title: 'City',
    formControl: 'cityFormControl' as keyof ClientEditingForm,
    inputType: 'text',
  },
  {
    title: 'Country',
    formControl: 'countryFormControl' as keyof ClientEditingForm,
    inputType: 'text',
  },
];
