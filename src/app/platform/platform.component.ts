import {Component, Input, OnInit} from '@angular/core';
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-platform',
  templateUrl: './platform.component.html',
  styleUrls: ['./platform.component.scss']
})
export class PlatformComponent implements OnInit {
  @Input() platform: any = null;
  @Input() platformName: any = null;
  staticServer: any = environment.staticServer;

  constructor() {
  }

  ngOnInit() {
  }

}
