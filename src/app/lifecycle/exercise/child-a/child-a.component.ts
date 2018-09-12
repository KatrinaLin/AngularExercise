import {Component, OnChanges, OnDestroy, OnInit} from '@angular/core';
import {Input} from "@angular/core";
import {LoggerService} from "../../../shared/logger.service";

@Component({
  selector: 'app-child-a',
  templateUrl: './child-a.component.html',
  styleUrls: ['./child-a.component.css']
})
export class ChildAComponent implements OnInit, OnChanges, OnDestroy {

  @Input()
  sharedValue = null;

  @Input()
  valueA = null;

  constructor(public logger: LoggerService) {
    this.logger.tick();
    this.logger.log('*** A: Constructor ***');
  }

  ngOnInit() {
    this.logger.tick();
    this.logger.log('*** A: ngOnInit ***');
  }

  ngOnChanges() {
    this.logger.tick();
    this.logger.log('*** A: ngOnChanges ***');
  }

  ngOnDestroy() {
    this.logger.tick();
    this.logger.log('*** A: ngOnDestroy ***');
  }

}
