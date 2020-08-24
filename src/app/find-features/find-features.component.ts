import { HttpControllerService } from './../http-controller.service';
import { Component } from '@angular/core';
import { Feature } from '../classes/Feature';

@Component({
  selector: 'app-find-features',
  templateUrl: './find-features.component.html',
  styleUrls: ['./find-features.component.css'],
})
export class FindFeaturesComponent {
  constructor(private http: HttpControllerService) {}

  clientName: string;

  featureData: Feature[];

  showTable: boolean = false;

  errorMsg: string;

  exception: boolean;

  onSubmit() {
    this.http.findFeatures(this.clientName).subscribe(
      (data) => {
        this.featureData = data;
        this.showTable = true;
        this.exception = false;

      },
      (error) => {
        this.errorMsg = error;
        this.exception = true;
        console.log(error);
      }
    );
  }
}
