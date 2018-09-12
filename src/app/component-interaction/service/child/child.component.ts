import {Component, OnInit} from '@angular/core';
import { StepService } from '../step.service';

@Component({
  selector: 'app-service-interaction-child',
  templateUrl: './child.component.html',
  styleUrls: ['../../event/child/child.component.css']
})
export class ServiceInteractionChildComponent implements OnInit {

  step = 0;
  stepArray = [];

  constructor(private stepService: StepService) { }

  ngOnInit() {
    this.stepService.step$.subscribe(step => {
      this.step = step;
      this.stepArray = Array.from(new Array(this.step), (value, index) => index);
    });
  }

  onQuit() {
    this.stepService.onQuite(true);
  }
}
