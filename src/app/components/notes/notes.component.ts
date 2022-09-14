import { Component, OnInit } from '@angular/core';
import { NotesService } from './../../notes/Default/notes.service';
import { Note } from 'src/app/notes/ODataTutorial/Entities/note.entity';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  notes: Note[] = [];

  constructor(private notesService: NotesService) { }

  ngOnInit(): void {
    console.clear();
  }

  fetchNotes() {
    console.clear();
    this.notesService.entities().fetchAll().subscribe(notes => {
      this.notes = notes;
      console.log(notes);
    });
  }

  updateNote(id: string) {
    let message = this.randomString(20);
    this.notesService.modify(id, { MessageNote: message })
      .subscribe(_ => console.log('Update done!'));
  }

  randomString(length: number) {
    let randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for ( var i = 0; i < length; i++ ) {
        result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }

    return result;
}
}
