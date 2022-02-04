import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-error-expired',
  templateUrl: './error-expired.component.html',
  styleUrls: ['./error-expired.component.scss'],
})
export class ErrorExpiredComponent implements OnInit {
  constructor(private dialogRef: MatDialogRef<ErrorExpiredComponent>) {}

  ngOnInit(): void {}

  closeDialog() {
    this.dialogRef.close(null);
  }
}
