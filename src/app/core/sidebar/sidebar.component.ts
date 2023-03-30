import { Component, OnInit } from '@angular/core';
import { SideBarIcons } from './sidebar.icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  public icons : Array<string> = SideBarIcons
  constructor() { }

  ngOnInit(): void {

  }

}
