import { Component, Input } from '@angular/core';
import { Client } from '@demo-repo/shared/core-api';
import { MatDialog } from '@angular/material/dialog';
import { ClientEditingDialogComponent } from '../client-editing-dialog/client-editing-dialog.component';
import { CLIENT_REPORT_COLUMNS } from '../../constants/client-report';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'demo-repo-client-list-table',
  templateUrl: './client-list-table.component.html',
  styleUrls: ['./client-list-table.component.scss'],
})
export class ClientListTableComponent {
  @Input() clientList: Client[] = [];

  isEditButtonDisabled: boolean = false;

  p: number = 1;
  columns = CLIENT_REPORT_COLUMNS;

  constructor(public dialog: MatDialog, public snackBar: MatSnackBar) {
  }

  onCreateReportButtonClick() {
    const dialogRef = this.dialog.open(ClientEditingDialogComponent, {});

    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        this.snackBar.open('Client was created successfully', 'close');
        // dispatch CreateClientReport action
      }
    });
  }


  onEditButtonClick(client: Client) {
    if (this.isEditButtonDisabled) return;
    const dialogRef = this.dialog.open(ClientEditingDialogComponent, {
      data: {
        client
      },
    });

    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        this.snackBar.open('Client was updated successfully', 'close');
        // dispatch UpdateClientReport action
      }
    });
  }
}
