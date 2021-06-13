// Imports
import { Component, OnInit } from '@angular/core';
import { Client, Group } from '../../models/client.models';
import { ClientService } from '../../services/client.service';
import swal from 'sweetalert'; // Import externo, librería sweetalert para crear alertas dinámicas

@Component({
  selector: 'app-manage-clients',
  templateUrl: './manage-clients.component.html',
  styleUrls: ['./manage-clients.component.css'],
  providers: [ClientService]
})

// Clase ManageClientsComponent
export class ManageClientsComponent implements OnInit {

  // Variables
  clientSelected: Client = new Client(0, "", 0);
  public client: Client;
  public groups: Group[];

  clientArray: Client[] = [];

  // Se consume el clientService
  constructor(
    private _clientService: ClientService
  ) { }

  // Método que se ejecuta al iniciar la aplicación
  ngOnInit(): void {
    // Alerta
    swal("Bienvenidos a nuestro sitio!\n Proyecto Final Sistemas Distribuidos LCC", "Esta aplicación está basada en la nube, y su objetivo es controlar la creación de clientes de un determinado servicio");
    this.groups = this._clientService.getGroups();
  }

  /**
   * Método sendClient, no recibe nada como parámetros
   * Primero revisa si es un cliente nuevo (id=0 por defecto), si es así lo crea y lo agrega al arreglo
   * Si no es un cliente nuevo, entonces se actualiza el cliente actual
   */
  sendClient() {
    if (this.clientSelected.id == 0) {
      this.clientSelected.id = this.clientArray.length;
      this.clientArray.push(this.clientSelected);
      swal("Cliente creado!", "Se ha agregado el cliente!", "success");
    }
    else {
      swal("Cliente actualizado!", "Se ha actualizado el cliente!", "success");
    }

    // Una vez se crea o actualiza un cliente, se reinicia la variable clientSelected a una nueva
    this.clientSelected = new Client(0, "", 0);
  }

  /**
   * Método update, recibe como parámetro el client actual que se deseea editar
   * Esté método iguala la variable clientSelected para que está sea el client que se quiere editar y se llene el formulario
   */
  update(client) {
    this.clientSelected = client;
  }

  /**
   * Método delete, recibe como parámeto el id del client a eliminar
   * Recorre el arreglo de clientes y si el id del arreglo es igual al id que se recibió, se elimina si se acepta una alerta
   */
  delete(id) {
    for (let i = 0; i < this.clientArray.length; i++) {
      if (this.clientArray[i].id == id) {

        swal({
          title: "¿Estas segur@?",
          text: "Una vez eliminado, no podrás recuperarlo!",
          icon: "warning",
          buttons: ['Cancelar', 'Eliminar'],
          dangerMode: true,
        })
          .then((willDelete) => {
            if (willDelete) {
              swal("Se ha eliminado el cliente!", {
                icon: "success",
              });

              this.clientArray.splice(i, 1);

            } else {
              swal("El cliente sigue aquí!");
            }
          });


      }
    }
  }


}
