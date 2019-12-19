import { Component, OnInit } from '@angular/core';
import { preserveWhitespacesDefault } from '@angular/compiler';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styles: ['']
})
export class TwoWayBindingComponent implements OnInit {

  userName='';
  isUserNameEmpty=false;
  numberOfClicks=0;
  serverStatus: string='offline';
  servers =['Test server', 'Test server1'];

  constructor() {
    this.isActive();
    this.serverStatus=Math.random()> 0.5 ? 'online': 'offline';
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
    this.servers.push(this.serverStatus);
    this.numberOfClicks++;
  }

  getColor(){
    return this.numberOfClicks>= 5 ? 'lightgreen': '';
  }
}
