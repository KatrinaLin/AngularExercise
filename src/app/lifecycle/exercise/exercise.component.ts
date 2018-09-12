import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../../shared/logger.service';

@Component ({
  selector: 'app-lifecycle-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: [ '../example/example.component.css' ],
})
export class ExerciseComponent implements OnInit {
  hasItemA = true;
  hasItemB = true;
  hookLog: string[];

  sharedValue = "sharedValue";

  constructor (public logger: LoggerService) {
    this.hookLog = logger.logs;
  }

  ngOnInit (): void {
  }

  updateSharedValue () {
    // TODO:update A & B shared value
    this.logger.tick();
    this.logger.log('---------A & B Changed---------');
  }

  updateValueA () {
    // TODO:update A value
    this.logger.tick();
    this.logger.log('---------A Changed---------');
  }

  removeItemA() {
    this.hasItemA = !this.hasItemA;
    if (this.hasItemA) {
      // TODO:update A & B shared value
      // TODO:update A value
      if (!this.hasItemB) {
        this.logger.clear();
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
