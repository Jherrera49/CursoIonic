import { Component, OnInit } from '@angular/core';
import { SwapiService } from '../../services/swapi.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-descriptionplanets',
  templateUrl: './descriptionplanets.page.html',
  styleUrls: ['./descriptionplanets.page.scss'],
})
export class DescriptionplanetsPage implements OnInit {

  planets:any;
  constructor(
      private swapiService:SwapiService,
      private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params)=>{
      let id=params.get('id');
      console.log(id);
   
      this.planets = this.swapiService.getSwapi(`planets/${id}`).subscribe(data=>{
        this.planets=data;
        console.log(data);
      })
    });

  }

}
