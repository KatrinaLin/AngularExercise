import {Component, Input, OnChanges, OnDestroy, OnInit} from '@angular/core';
import {LoggerService} from "../../../shared/logger.service";

@Component({
  selector: 'app-child-b',
  templateUrl: './child-b.component.html',
  styleUrls: ['./child-b.component.css']
})
export class ChildBComponent implements OnInit, OnChanges, OnDestroy {

  @Input()
  sharedValue = null;

  constructor(public logger: LoggerService) {
    this.logger.tick();
    this.logger.log('=== B: Constructor ===');
  }

  ngOnInit() {
    this.logger.tick();
    this.logger.log('=== B: ngOnInit ===');
  }

  ngOnChanges() {
    this.logger.tick();
    this.logger.log('=== B: ngOnChanges ===');
  }

  ngOnDestroy() {
    this.logger.tick();
    this.logger.log('=== B: ngOnDestroy ===');
  }
}
