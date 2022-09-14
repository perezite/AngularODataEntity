import { NotesService } from './../../notes/Default/notes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  constructor(private notesService: NotesService) { }

  ngOnInit(): void {
    console.clear();
  }

  fetchNotes() {
    console.clear();
    this.notesService.entities().fetchAll().subscribe(x => console.log(x));
  }
}
