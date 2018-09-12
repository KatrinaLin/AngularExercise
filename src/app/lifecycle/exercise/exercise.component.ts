import {Component, OnInit} from '@angular/core';
import {LoggerService} from '../../shared/logger.service';

@Component({
  selector: 'app-lifecycle-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['../example/example.component.css'],
})
export class ExerciseComponent implements OnInit {
  hasItemA = true;
  hasItemB = true;
  hookLog: string[];

  sharedValue: string = "sharedValue";
  valueA = "valueA";

  constructor(public logger: LoggerService) {
    this.hookLog = logger.logs;
  }

  ngOnInit(): void {
  }

  updateSharedValue() {
    // TODO:update A & B shared value
    this.logger.tick();
    this.logger.log('---------A & B Changed---------');
    this.sharedValue = this.sharedValue.concat(" Update");
    this.logger.log(this.sharedValue);
  }

  updateValueA() {
    // TODO:update A value
    this.logger.tick();
    this.logger.log('---------A Changed---------');
    this.valueA = this.valueA.concat(" Update");
    this.logger.log(this.valueA);
  }

  removeItemA() {
    this.hasItemA = !this.hasItemA;
    if (this.hasItemA) {
      // TODO:update A & B shared value
      // TODO:update A value
      this.valueA = "valueA";
      if (!this.hasItemB) {
        this.logger.clear();
        this.sharedValue = "sharedValue";
      }
      this.hookLog = this.logger.logs;
      this.logger.tick();
      this.logger.log('---------A Created---------');
    } else {
      this.hookLog = this.logger.logs;
      this.logger.tick();
      this.logger.log('---------A Deleted---------');
    }
  }

  removeItemB() {
    this.hasItemB = !this.hasItemB;
    if (this.hasItemB) {
      // TODO:update A & B shared value
      if (!this.hasItemA) {
        this.logger.clear();
        this.sharedValue = "sharedValue";
      }
      this.hookLog = this.logger.logs;
      this.logger.tick();
      this.logger.log('---------B Created---------');
    } else {
      this.hookLog = this.logger.logs;
      this.logger.tick();
      this.logger.log('---------B Deleted---------');
    }
  }
}
