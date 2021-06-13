import { Injectable } from '@angular/core';
import { Client, Group } from '../models/client.models';

@Injectable()
export class ClientService {

    public clients: Client[];
    public groups: Group[];
    public i: number;

    constructor() {
        this.groups = [
            {
                group: 0,
                name: 'Al corriente'
            },
            {
                group: 1,
                name: 'Con deudas'
            }
        ];
        this.clients = [];
        this.i = 0;
    }

    getClients() {
        return this.clients;
    }

    getClient() {
        return this.clients[this.i];
        this.i++;
    }

    getGroups() {
        return this.groups;
    }

    addClient(newClient) {
        // this.clients[this.clients.length] = newClient;
        this.clients.push(newClient);
    }

    newClient(): Client {
        return {
            id: this.clients.length,
            name: '',
            group: 0
        };
    }
}