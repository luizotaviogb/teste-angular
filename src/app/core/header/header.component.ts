import { Component, OnInit } from '@angular/core';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public faBell = faBell
  public faCog = faCog
  
  constructor() { }

  ngOnInit(): void {
  }

}
