import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import {
  PeopleService,
  PersonGender,
} from '../../../trippin';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  private lastEtag : string | undefined = "";

  constructor(private peopleService: PeopleService) {
  }

  ngOnInit(): void { }

  fetchPeople()
  {
    console.clear();
    this.peopleService.entities().fetchAll().subscribe(x => console.log(x));
  }

  addPerson()
  {
    console.clear();
    this.peopleService.create(
      {
        Emails: ['some@email.com'],
        UserName: 'someuser',
        Gender: PersonGender.Male,
        FirstName: 'Some',
        LastName: 'User',
      }
    )
    .pipe(
      map(( { entity, annots } ) => {
        this.lastEtag = annots.etag
      })
    )
    .subscribe(() => console.log('addPerson: done - etag:' + this.lastEtag));
  }

  modifyLastCreatedPerson()
  {
    let etag = this.lastEtag;

    this.peopleService.modify('someuser', { LastName: 'Updated' }, { etag })
    .pipe(
      map(({ entity, annots }) => {
        return entity;
      }))
    .subscribe(() => console.log('modifyLastCreatedPerson: done'));
  }
}
