import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-feature-success',
  templateUrl: './feature-success.component.html',
  styleUrls: ['./feature-success.component.css'],
})
export class FeatureSuccessComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) {}

  SuccessMsg: string;

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.paramMap.get('fId');

    this.SuccessMsg = "Feature is registered with id : " +id;
  }
}
