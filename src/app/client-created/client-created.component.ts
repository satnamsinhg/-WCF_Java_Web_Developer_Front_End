import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-created',
  templateUrl: './client-created.component.html',
  styleUrls: ['./client-created.component.css'],
})
export class ClientCreatedComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) {}


  SuccessMsg:string;

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.paramMap.get('clientId');

    this.SuccessMsg = 'Client is registered with : ' + id;
  }
}
