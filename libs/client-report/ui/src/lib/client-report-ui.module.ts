import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientListTableComponent } from './client-list-table/client-list-table.component';
import { ClientEditingDialogComponent } from './client-editing-dialog/client-editing-dialog.component';
import { TableModule } from "primeng/table";
import { ButtonModule } from "primeng/button";
import { NgxPaginationModule } from 'ngx-pagination';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';


@NgModule({
  imports: [CommonModule, TableModule, ButtonModule, NgxPaginationModule, MatIconModule, MatDialogModule, FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatDatepickerModule, MatSelectModule, MatNativeDateModule, MatSnackBarModule],
  declarations: [ClientListTableComponent, ClientEditingDialogComponent],
  exports: [ClientListTableComponent, ClientEditingDialogComponent],
})
export class ClientReportUiModule { }
