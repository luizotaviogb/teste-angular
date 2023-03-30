import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { faExclamationTriangle, faUser } from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-cpf-card',
  templateUrl: './cpf-card.component.html',
  styleUrls: ['./cpf-card.component.css']
})
export class CpfCardComponent implements OnInit {

  public faUser = faUser
  public faCheckCircle = faCheckCircle
  public errorIcon = faExclamationTriangle
  @Input() user: User | undefined

  constructor() { }

  ngOnInit(): void {
  }

}
