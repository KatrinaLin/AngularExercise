import { Component } from '@angular/core';

@Component({
  selector: 'app-local-variable-interaction-child',
  templateUrl: './child.component.html',
  styleUrls: ['../../event/child/child.component.css']
})
export class LocalVariableInteractionChildComponent {
  isQuited = false;
  step = 0;
  stepArray = [];

  nextStep() {
    this.step++;
    this.stepArray = Array.from(new Array(this.step), (value, index) => index);
  }

  startOver() {
    this.step = 0;
    this.stepArray = [];
    this.isQuited = false;
  }

  onQuit() {
    this.isQuited = true;
  }
}
