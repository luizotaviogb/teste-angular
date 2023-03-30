import { OnboardingService } from './onboarding.service';
import { User } from '../models/user';

describe('OnboardingService', () => {
  let onboardingService: OnboardingService;

  beforeEach(() => {
    onboardingService = new OnboardingService();
  });

  it('should return user data for existing CPF', () => {
    const cpf = '100.466.269-64';
    const expectedUser: User = {
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
    };
    const result = onboardingService.getUserData(cpf);
    expect(result).toEqual(expectedUser);
  });

  it('should return not found user data for non-existing CPF', () => {
    const cpf = '000.000.000-00';
    const expectedUser: User = {
      name: "Não encontrado",
      cpf: "000.000.000-00",
      cpfSituation: false,
      accounts: []
    };
    const result = onboardingService.getUserData(cpf);
    expect(result).toEqual(expectedUser);
  });
});