import { Component, DoCheck, Input, OnInit } from '@angular/core';
import { Client, Group } from '../../models/client.models';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-list-clients',
  templateUrl: './list-clients.component.html',
  styleUrls: ['./list-clients.component.css'],
  providers: [ClientService]
})
export class ListClientsComponent implements OnInit, DoCheck {

  public clients: Client[];
  public groups: Group[];
  // @Input() client: Client;
  constructor(
    private _clientService: ClientService
  ) {
    this.clients = [];
  }

  ngOnInit() {
    this.clients = this._clientService.getClients();
    this.groups = this._clientService.getGroups();
    console.log(this.clients);
    // console.log("Lenght: " + this.client.length);

    /*console.log(this.client);
    this.clients.push(this.client);
    console.log(this.clients.length);
    console.log(this.clients);*/
  }
  ngDoCheck() {
    /* this.client = this._clientService.getClient();
     this.groups = this._clientService.getGroups();    
     console.log(this.client);*/
    // console.log("Lenght: " + this.client.length);
  }

  showClients(event) {
    this.clients.push(event.client);
    console.log(this.clients);
  }

  delete(id, name, group) {
    //this.clients.splice(client,1);
    for (var i = 0; i < this.clients.length; i++) {
      if (this.clients[i].id == id) {
        this.clients.splice(i, 1);
      }

    }
  }

}
