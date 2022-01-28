import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MessageService } from '../../service/message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.less']
})
export class MessageComponent implements OnInit {

  constructor(private messageService: MessageService,
              private router: Router) { }

  ngOnInit(): void {
  }

  get messages() {
    return this.messageService.messages;
  }

  close(): void {
    // Close the popup.
  }

}
