import { Component, OnInit } from '@angular/core';
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
    ).subscribe(() => console.log('done'));

    // let person = await firstValueFrom(serviceWithParser
    //   .create({
    //     Emails: ['some@email.com'],
    //     UserName: 'someuser',
    //     Gender: PersonGender.Male,
    //     FirstName: 'Some',
    //     LastName: 'User',
    //   })
    //   .pipe(
    //     map(({ entity, annots }) => {
    //       etag = annots.etag;
    //       return entity;
    //     })
    //   ));
    // console.log(person, etag);


    // this.peopleService.fetchAll().subscribe(console.log);
   //  this.person.fetchAll().subscribe(console.log);
  }

  modifyPerson()
  {
    /*
     .modify('someuser', { LastName: 'LastName' }, { etag })
        .pipe(
          map(({ entity, annots }) => {
            etag = annots.etag;
            return entity;
          })
        ));
    */

    // this.peopleService.modify('someuser', { LastName: 'LastName Updated'}).subscribe(() => console.log('done'));


        this.peopleService.modify('someuser', { LastName: 'LastName' })
        .pipe(
          map(({ entity, annots }) => {
            return entity;
          }))
        .subscribe(() => console.log('done'));
  }

}
