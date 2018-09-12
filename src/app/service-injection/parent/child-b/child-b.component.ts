import { Component, OnInit } from '@angular/core';
import { RootService } from '../../../core/root.service';
import { ModuleService } from '../../module.service';
import { ParentService } from '../parent.service';
import { ChildBService } from './child-b.service';

@Component({
  selector: 'app-child-b',
  templateUrl: './child-b.component.html',
  styleUrls: ['../parent-common.css'],
  providers: [ChildBService]
})
export class ChildBComponent implements OnInit {


  constructor(
    public rootService: RootService,
    public moduleService: ModuleService,
    public parentService: ParentService,
    public childBService: ChildBService,
  ) { }

  ngOnInit() {
  }

  changeChildBValue() {
    this.childBService.changeValue();
  }
}
