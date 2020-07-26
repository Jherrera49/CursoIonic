import { Component, OnInit } from '@angular/core';
import { SwapiService } from '../../services/swapi.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-descriptionpeople',
  templateUrl: './descriptionpeople.page.html',
  styleUrls: ['./descriptionpeople.page.scss'],
})
export class DescriptionpeoplePage implements OnInit {
  people:any;
  constructor(
    private swapiService:SwapiService,
    private route:ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params)=>{
      let id=params.get('id');
      console.log(id);
   
      this.people = this.swapiService.getSwapi(`people/${id}`).subscribe(data=>{
        this.people=data;
        console.log(data);
      })
    });
  }

}
