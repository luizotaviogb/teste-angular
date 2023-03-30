import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class OnboardingService {

  private user: User = {
    name: "Luiz Otávio Goebel Brey",
    cpf: "100.466.269-64",
    cpfSituation: true,
    accounts: [{
      accountNumber: "157042-8",
      accountType: "Conta aplicação",
      cooperativa: "Cooperativa Viacredi"
    },
    {
      accountNumber: "652935-6",
      accountType: "Conta corrente",
      cooperativa: "Cooperativa Viacredi"
    }]
  }

  private userNotFouund: User = {
    name: "Não encontrado",
    cpfSituation: false,
    cpf: "",
    accounts: []
  }

  constructor() { }

  public getUserData(cpf: string): User {
    if (cpf === "100.466.269-64") {
      return this.user
    } else {
      this.userNotFouund.cpf = cpf
      return this.userNotFouund
    }
  }

}
