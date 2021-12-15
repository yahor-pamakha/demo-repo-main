import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'shared-input',
  templateUrl: './shared-input.component.html',
  styleUrls: ['./shared-input.component.scss']
})
export class SharedInputComponent implements OnInit {
  @Input() inputType: string;
  @Input() control: FormControl;
  @Input() separateControl: FormControl;
  @Input() fieldTitle: string;

  houseNrFieldTitle: string = 'House no. | addition';

  constructor() { }

  ngOnInit(): void {
  }

}
