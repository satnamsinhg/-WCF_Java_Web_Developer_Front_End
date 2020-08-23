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
  constructor(private controler: HttpControllerService, private router:Router) { }

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
  
  errorMsg: string;

  ngOnInit(): void {
  }
  onSubmit() {
    console.log(this.featureForm.value);

    this.controler.featurePost(this.featureForm.value).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['feature', data.fId ]);
      },
      error => {
        console.log(error);
        this.errorMsg = error;
      }
    );
  }
}
