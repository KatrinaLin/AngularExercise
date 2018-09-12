import { Component } from '@angular/core';

@Component({
  selector: 'app-viewchild-interaction-child',
  templateUrl: './child.component.html',
  styleUrls: ['../../event/child/child.component.css']
})
export class ViewChildInteractionChildComponent {
  isQuited = false;
  step = 0;
  stepArray = [];

  nextStep() {
    this.step++;
    this.stepArray = Array.from(new Array(this.step), (value, index) => index);
  }

  startOver() {
    // TODO: start over
  }

  onQuit() {
    // TODO: quit game
  }
}
