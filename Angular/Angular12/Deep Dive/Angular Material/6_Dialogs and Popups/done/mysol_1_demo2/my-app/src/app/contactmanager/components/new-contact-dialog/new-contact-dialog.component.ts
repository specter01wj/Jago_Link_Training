import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from '../../models/user';

@Component({
  selector: 'app-new-contact-dialog',
  templateUrl: './new-contact-dialog.component.html',
  styleUrl: './new-contact-dialog.component.scss'
})
export class NewContactDialogComponent implements OnInit {
  avatars = [
    'svg-1', 'svg-2', 'svg-3', 'svg-4'
  ];

  user: User;

  constructor(
    private dialogRef: MatDialogRef<NewContactDialogComponent>,
  ) {}

  ngOnInit(): void {
    this.user = new User();
  }

  save() {

  }

  dismiss() {
    this.dialogRef.close(null);
  }

}
