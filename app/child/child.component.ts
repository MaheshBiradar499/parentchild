import { Component, OnInit,Input,Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
// @Input() value;
@Output () message:EventEmitter<string>=new EventEmitter<string>()

passData(){
  this.message.emit("data from child")
}
  constructor() { }

  ngOnInit(): void {
  }

}
