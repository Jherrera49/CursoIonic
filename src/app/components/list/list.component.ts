import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  @Input() swapi;
  @Input() icon;
  id:string;
  path:string;
  constructor(private router:Router) { }

  ngOnInit() {}

  showItem(item){
    let urlElements = item.url.split("/");
    this.id= urlElements[urlElements.length - 2];
    this.path= urlElements[urlElements.length - 3];
    this.router.navigateByUrl(`/${this.path}/${this.id}`);
  }

}
