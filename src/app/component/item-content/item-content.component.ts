import { Component, OnInit, Input } from '@angular/core';
import { interfaceComponent } from '../inteface.component';
import { ContentItem } from 'src/app/cors/model/content.item';

@Component({
  selector: 'app-item-content',
  templateUrl: './item-content.component.html',
  styleUrls: ['./item-content.component.css']
})
export class ItemContentComponent implements OnInit, interfaceComponent {
  @Input()data: any;
  componentsDinamicos: ContentItem[];
  constructor() { }

  ngOnInit() {
  }

}
