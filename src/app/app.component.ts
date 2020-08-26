import { Component, OnInit, Type } from '@angular/core';
import { ContentItem } from './cors/model/content.item';
import { CoreService } from './cors/services/core.service';
import { Serializer } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  componentsDinamicos: ContentItem[];
  constructor(private coreService:CoreService){

  }
  ngOnInit(): void {
 
  }
}
