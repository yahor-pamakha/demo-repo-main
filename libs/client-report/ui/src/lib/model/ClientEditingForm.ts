import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Client } from '@demo-repo/shared/core-api';

export class ClientEditingForm extends FormGroup {
    readonly nameFormControl = this.get('nameFormControl') as FormControl;
    readonly genderFormControl = this.get('genderFormControl') as FormControl;
    readonly birthDateFormControl = this.get('birthDateFormControl') as FormControl;
    readonly ibanFormControl = this.get('ibanFormControl') as FormControl;
    readonly emailFormControl = this.get('emailFormControl') as FormControl;
    readonly postcodeFormControl = this.get('postcodeFormControl') as FormControl;
    readonly houseNrFormControl = this.get('houseNrFormControl') as FormControl;
    readonly additionFormControl = this.get('additionFormControl') as FormControl;
    readonly cityFormControl = this.get('cityFormControl') as FormControl;
    readonly countryFormControl = this.get('countryFormControl') as FormControl;

    constructor(readonly model: Client, readonly formBuilder: FormBuilder = new FormBuilder()) {
        super(formBuilder.group({
            nameFormControl: [model?.name, Validators.required],
            genderFormControl: [model?.gender, Validators.required],
            birthDateFormControl: [new Date(model?.birthDate.replace('/', ' '))],
            ibanFormControl: [model?.iban, Validators.required],
            emailFormControl: [model?.email, Validators.required],
            postcodeFormControl: [model?.postcode],
            houseNrFormControl: [model?.houseNr, Validators.required],
            additionFormControl: [model?.addition, Validators.required],
            cityFormControl: [model?.city, Validators.required],
            countryFormControl: [model?.country, Validators.required],
        }).controls);
    }
}