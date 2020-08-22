import { Component, OnInit, Input } from '@angular/core';
import { interfaceComponent } from '../inteface.component';

@Component({
  selector: 'app-input-personalizado',
  templateUrl: './input-personalizado.component.html',
  styleUrls: ['./input-personalizado.component.css']
})
export class InputPersonalizadoComponent implements OnInit, interfaceComponent {

  desLabel:string;
  typeInput:string;
  constructor() { }
  @Input()data: any;

  ngOnInit() {
    this.desLabel = this.data.label;
    this.typeInput = this.data.type;
  }

}