import { Component, OnInit } from '@angular/core';
import { SwapiService } from '../../services/swapi.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.page.html',
  styleUrls: ['./people.page.scss'],
})
export class PeoplePage implements OnInit {

  constructor( private swapiService:SwapiService) { }
  people:any;
  iconname="people";
  ngOnInit() {
    this.people= this.swapiService.getSwapi('people');
  }

}
