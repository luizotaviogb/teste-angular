import { Component, Input, OnInit } from '@angular/core';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';
import { Account } from '../../models/accounts';

@Component({
  selector: 'app-account-card',
  templateUrl: './account-card.component.html',
  styleUrls: ['./account-card.component.css']
})
export class AccountCardComponent implements OnInit {

  @Input() account!: Account
  
  public faCreditCard = faCreditCard;

  constructor() { }

  ngOnInit(): void {
  }

}
