import { Router } from '@angular/router';
import { HttpControllerService } from './../http-controller.service';
import { Client } from './../classes/Client';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.css']
})
export class CreateClientComponent implements OnInit {

  clientName: string;

  client: Client;

  constructor(private http: HttpControllerService, private route: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {

    this.client = new Client(this.clientName);

    this.http.clientPost(this.client).subscribe(
      data => {
        console.log(data);
        this.route.navigate(['client', data.clientId]);
      },
      error => {
        console.log(error);
      }

    )



  }

}
