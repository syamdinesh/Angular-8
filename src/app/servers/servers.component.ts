import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  //styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  serversId=10;
  serversStatus=false;

  serversStatusUpdate='not yet created';
  serverName='';

  constructor() {
    setTimeout(()=>{
      this.serversStatus=true;
    },2000);
  }

  getServerStatus(){
    return this.serversStatus;
  }
  ngOnInit() {
  }

  onCreateServer(){
    this.serversStatusUpdate='Created';
  }

  onUpdateServerName(event: Event){
    this.serverName=(<HTMLInputElement>event.target).value;
  }
}
