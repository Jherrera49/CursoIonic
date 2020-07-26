import { Component, OnInit } from '@angular/core';
import { SwapiService } from '../../services/swapi.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-descriptionstarships',
  templateUrl: './descriptionstarships.page.html',
  styleUrls: ['./descriptionstarships.page.scss'],
})
export class DescriptionstarshipsPage implements OnInit {
  starships:any;
  constructor(
    private swapiService:SwapiService,
    private route:ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params)=>{
      let id=params.get('id');
      console.log(id);
   
      this.starships = this.swapiService.getSwapi(`starships/${id}`).subscribe(data=>{
        this.starships=data;
        console.log(data);
      })
    });
  }

}
