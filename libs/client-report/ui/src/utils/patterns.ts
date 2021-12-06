export const CLIENT_NAME_REGEXP: RegExp = /^[a-z ,.'-]+$/i;

export const CLIENT_IBAN_REGEXP: RegExp = /^([A-Z]{2}[ \-]?[0-9]{2})(?=(?:[ \-]?[A-Z0-9]){9,30}$)((?:[ \-]?[A-Z0-9]{3,5}){2,7})([ \-]?[A-Z0-9]{1,3})?$/;

export const CLIENT_NAME_EMAIL_REGEXP: RegExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

export const CLIENT_DEFAULT_POSTCODE: string = 'CW3 9SS';

