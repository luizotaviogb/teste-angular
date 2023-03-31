# Desafio Angular
O desafio corresponde em realizar o desenvolvimento de duas páginas, na primeira página teremos um formulário para consulta de CPF, essa consulta deverá ter a possibilidade de dois caminhos, o de insucesso, onde o CPF inserido não é valido, gerando uma mensagem de erro na tela, e o feliz, onde
o CPF é localizado e o usuário direcionado a tela dois. Na “tela dois”, após ser inserido um CPF válido no formulário, deverá carregar os dados do cooperado. Importante seguir o modelo de interface que segue abaixo
### Tecnologias Utilizadas

- Angular 13
- Cypress
- Jasmine-core
- Karma
### Executando o projeto

Use o comando a seguir para baixar todas as dependencias do projeto:

- `npm i`

Use o comando a seguir para executar o projeto:

- `ng serve`

Use o comando a seguir para executar os testes unitários e gerar relatório de cobertura:

- `ng test --code-coverage`

Use o comando a seguir para abrir o cypress e realizar os testes E2E:

- `npx cypress open`

### Cobertura dos testes unitários
 ![TesteUnitário](https://github.com/luizotaviogb/desafio-angular/blob/master/src/assets/unitaryTestCoverage.png)

### Testes E2E
 ![CypressTest](https://github.com/luizotaviogb/desafio-angular/blob/master/src/assets/cypressTest.png)