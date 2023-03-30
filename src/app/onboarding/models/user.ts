import { Account } from "./accounts";

export interface User {
    name: string,
    cpfSituation: boolean,
    cpf: string,
    accounts: Array<Account>
}