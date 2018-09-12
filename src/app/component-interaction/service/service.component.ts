import { Component, OnInit } from '@angular/core';
import { StepService } from './step.service';

@Component({
  selector: 'app-service-interaction',
  templateUrl: './service.component.html',
  providers: [StepService]
})
export class ServiceInteractionComponent implements OnInit{
  isQuited = false;
  step = 0;

  constructor(private stepService: StepService) { }

  ngOnInit (): void {
    this.stepService.onQuit$.subscribe(isQuited => this.isQuited = isQuited);
  }

  nextStep() {
    this.stepService.nextStep(++this.step);
  }

  startOver() {
    this.step = 0;
    this.isQuited = false;
    this.stepService.nextStep(this.step);
    this.stepService.onQuite(this.isQuited);
  }
}
