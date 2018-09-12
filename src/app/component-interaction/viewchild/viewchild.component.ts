import { Component, ViewChild } from '@angular/core';
import { ViewChildInteractionChildComponent } from './child/child.component';

@Component({
  selector: 'app-viewchild-interaction',
  templateUrl: './viewchild.component.html'
})
export class ViewChildInteractionComponent {
  @ViewChild(ViewChildInteractionChildComponent) private childComponent: ViewChildInteractionChildComponent;

  constructor() { }

  nextStep() {
    this.childComponent.nextStep();
  }

  startOver() {
    this.childComponent.startOver();
  }

  isQuited() {
    return this.childComponent.isQuited;
  }
}
