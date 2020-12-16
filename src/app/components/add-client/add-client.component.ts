import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Client, Group } from '../../models/client.models';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css'],
  providers: [ClientService]
})
export class AddClientComponent implements OnInit {

  public client: Client;
  public groups: Group[];  
  //@Output() myClient = new EventEmitter;
  @Output() listClients = new EventEmitter;

  constructor(
    private _clientService: ClientService
  ) { }

  ngOnInit()  {    
    this.client = this._clientService.newClient();    
    this.groups = this._clientService.getGroups();     
  }

  ngClient() {
    console.log(this.client);
    this._clientService.addClient(this.client);
    console.log(this.client);
    this.client = this._clientService.newClient();
    console.log(this.client);
  }

  sendClient(event, client) {
    this.listClients.emit({
      client: client
    });
  }

}
