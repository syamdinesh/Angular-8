import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent implements OnInit {

  userName='';
  isUserNameEmpty=false;
  numberOfClicks=0;

  constructor() {
    this.isActive();4
  }

  ngOnInit() {
  }

  twoWayBinding(event :Event){
    this.userName=(<HTMLInputElement>event.target).value;
  }

  isActive(){
    if(this.userName!=''){
      this.isUserNameEmpty=true;
    }
  }
  actionButton(){
    this.userName='';
  }

  counting(){
    this.numberOfClicks++;
  }

  getColor(){
    return this.numberOfClicks>= 5 ? 'lightgreen': '';
  }
}
