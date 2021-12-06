import { Client } from '@demo-repo/shared/core-api';

export const CLIENT_REPORT_COLUMNS: (keyof Client)[] = [
  'name',
  'gender',
  'birthDate',
  'iban',
  'email',
  'address',
];

export const CLIENT_SIMPLE_INPUT_FIELDS: (keyof Client)[] = [
  'iban',
  'email',
  'postcode',
];


export const CLIENT_SIMPLE_INPUT_FIELDS_TITLES: string[] = [
  'IBAN',
  'Email Address',
  'Post Code',
]

export const GENDER_LIST: string[] = [
  'Male',
  'Female'
];
