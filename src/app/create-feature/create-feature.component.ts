import { Router } from '@angular/router';
import { HttpControllerService } from './../http-controller.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-create-feature',
  templateUrl: './create-feature.component.html',
  styleUrls: ['./create-feature.component.css']
})
export class CreateFeatureComponent implements OnInit {

  constructor(private controler: HttpControllerService, private router: Router) { }

  featureForm = new FormGroup({
    fTitle: new FormControl(''),
    fDescription: new FormControl(''),
    fClient: new FormGroup({
      clientName: new FormControl('')
    }),
    fClientPriority: new FormControl(),
    fTargetDate: new FormControl(''),
    fProductArea: new FormControl('')
  })

  priorities : number[] = [];

  errorMsg: string;
  exception: boolean = false;

  ngOnInit(): void {
  }
  onSubmit() {

    this.controler.featurePost(this.featureForm.value).subscribe(
      data => {
        this.router.navigate(['feature', data.fId ]);
      },
      error => {
        console.log(error);
        this.exception = true;
        this.errorMsg = error;
      }
    );
  }

  clientNameEntered(event: string) {
    this.controler.findFeaturesSize(event).subscribe(
      data => {
        this.priorities.length = 0;
        for (let i = 0; i <= data; i++){
          this.priorities.push(i+1);
        }
      },
      error => {
        this.exception = true;
        this.errorMsg = "Client is not present with name: " + event;
      }
    )
  }

}
