import { Component, OnInit } from '@angular/core';
import { HttpControllerService } from '../http-controller.service';
import { Client } from '../classes/Client';

@Component({
  selector: 'app-find-clients',
  templateUrl: './find-clients.component.html',
  styleUrls: ['./find-clients.component.css'],
})
export class FindClientsComponent implements OnInit {
  constructor(private http: HttpControllerService) {}

  clientData: Client[];

  errorMsg: string;

  exception: boolean;

  ngOnInit(): void {

    this.http.getClientsList().subscribe(
      (data) => {
        this.clientData = data;
      },
      (error) => {
        this.errorMsg = error;
        this.exception = true;
        console.log(error);
      }
    );
  }
}
