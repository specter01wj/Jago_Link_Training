import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Note } from '../../models/note';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrl: './notes.component.scss'
})
export class NotesComponent implements OnInit, AfterViewInit {
  @Input() notes: Note[];

  constructor() { }


  ngOnInit(): void {
  }

  ngAfterViewInit() {
  }


}
