import { NotesModule } from './notes/notes.module';
import { NotesConfig } from './notes/notes.config';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ApiConfig, ODataInMemoryCache, ODataInStorageCache, ODataModule, QueryOptionNames } from 'angular-odata';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
import { TabViewModule } from 'primeng/tabview';
import { TripPinConfig, TripPinModule } from './trippin';
import { NorthwindConfig, NorthwindModule } from './northwind';
import { North2Config, North2Module } from './north2';
import { North3Config, North3Module } from './north3';
import { CBSConfig, CBSModule } from './cbs';
import { PeopleComponent, AirlinesComponent, AirportsComponent, PersonComponent } from './components/trippin';
import { ProductsComponent, CategoriesComponent } from './components/northwind';
import { ArticlesComponent } from './components/cbs';
import { OrdersComponent } from './components/northwind/orders.component';
import { EmployeesComponent } from './components/northwind/employees.component';
import { TestComponent } from './components/my-stuff/test/test.component';
import { NotesComponent } from './components/notes/notes.component';

@NgModule({
  declarations: [
    AppComponent,
    //CBS
    ArticlesComponent,
    //TripPin
    PeopleComponent,
    AirlinesComponent,
    AirportsComponent,
    PersonComponent,
    //Northwind
    CategoriesComponent,
    ProductsComponent,
    OrdersComponent,
    EmployeesComponent,
    TestComponent,
    NotesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    InputTextModule,
    TableModule,
    DialogModule,
    TabViewModule,
    ODataModule.forRoot(
      // North version 2
      Object.assign(North2Config, {
        serviceRootUrl: 'http://localhost:4200/north2/',
        options: {
          accept: {
            metadata: 'full',
          },
          withCredentials: true,
          params: {"$format": "json"},
          fetchPolicy: 'cache-and-network'
        }
      } as ApiConfig),
      // North version 3
      Object.assign(North3Config, {
        serviceRootUrl: 'http://localhost:4200/north3/',
        options: {
          accept: {
            metadata: 'full',
          },
          withCredentials: true,
          params: {"$format": "json"},
          fetchPolicy: 'no-cache'
        }
      } as ApiConfig),
      // Northwind version 4
      Object.assign(NorthwindConfig, {
        cache: new ODataInMemoryCache({timeout: 60}),
        options: {
          accept: {
            ieee754Compatible: true
          },
        }
      }),
      // TripPin
      Object.assign(TripPinConfig, {
        serviceRootUrl: 'http://localhost:4200/trippin/',
        cache: new ODataInStorageCache({timeout: 60, name: "TripPinCache"}),
        default: true,
        options: {
          stringAsEnum: true,
          stripMetadata: 'minimal',
          bodyQueryOptions: [QueryOptionNames.select, QueryOptionNames.expand],
          accept: {
            metadata: 'full',
          },
          prefer: {
            return: 'representation'
          }
        }
      } as ApiConfig),
      Object.assign(CBSConfig),
      Object.assign(NotesConfig)
    ),
    NotesModule,
    TripPinModule,
    NorthwindModule,
    North2Module,
    North3Module,
    CBSModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
