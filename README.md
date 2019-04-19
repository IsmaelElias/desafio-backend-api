# Desafio de criar uma API REST

Link da Documentação no Postman: https://documenter.getpostman.com/view/1825386/S1ETRGK9

Link da Collection no Postman: https://www.getpostman.com/collections/a4a8917b29a5f3f4cd7f

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/a4a8917b29a5f3f4cd7f#?env%5BDesafio%20Backend%20da%20Cubos%5D=W3sia2V5IjoiYmFzZV91cmwiLCJ2YWx1ZSI6Imh0dHA6Ly9sb2NhbGhvc3Q6MzAwMCIsImRlc2NyaXB0aW9uIjoiIiwidHlwZSI6InRleHQiLCJlbmFibGVkIjp0cnVlfV0=)

## Instalação

1. Clone o repositório.
2. Depois rode o NPM pra baixar as dependências: `npm install`
3. Depois use o comando `npm run dev` pra subir o servidor.
4. A porta configurada é a `3000`, é possível alterar no arquivo `src/server.js`
5. Acesse http://localhost:3000 e seja feliz :D

## Testes

Pra rodar os testes utilize o comando `npm run test`

## Descrição do Desafio

Olá! Neste desáfio você deve criar uma API REST para facilitar o gerenciamento de horários de uma clínica! A API deve conter endpoints para satisfazer as seguintes features:

    - Cadastrar regras de horários para atendimento
    - Apagar regra de horário para atendimento
    - Listar regras de horários para atendimento
    - Listar horários disponíveis dentro de um intervalo

É importante notar que a API deve ser feita com Javascript (Node.js) **e os dados devem ser salvos em um arquivo JSON** (não sendo permitido o uso de banco de dados).

### Endpoints:

#### Cadastro de regra de atendimento

O cadastro de regras de horário para atendimento deve possibilitar que se disponibilize intervalos de horário para consulta, possibilitando regras para:

    - Um dia especifico, por exemplo: estará disponível para atender dia 25/06/2018 nos intervalos de 9:30 até 10:20 e de 10:30 até as 11:00
    - Diáriamente, por exemplo: estará disponível para atender todos os dias das 9:30 até as 10:10
    - Semanalmente, por exemplo: estará disponível para atender todas segundas e quartas das 14:00 até as 14:30

#### Apagar regra

Este metódo deve ser capaz de de apagar uma regra especifica criada pelo endpoint descrito em "Cadastro de regra de atendimento".

#### Listar regras

O metódo de listar deve retornar as regras de atendimento criadas pelo endpoint descrito em "Cadastro de regra de atendimento".

#### Horários disponíveis

Este endpoint deve retornar os horários disponíveis, baseado nas regras criadas anteriormente, considerando um intervalo de datas informadas na requisição.

O retorno deve seguir o formato exemplificado abaixo. Por exemplo, se o intervalo solicitado for 25-01-2018 e 29-01-2018 teremos o seguinte resultado:

```
[{
    day: "25-01-2018",
    intervals: [{ start: "14:30", end: "15:00" }, { start: "15:10", end: "15:30" }]
}, {
    day: "26-01-2018",
    intervals: [{ start: "14:30", end: "15:00" }, { start: "15:00", end: "15:30" }]
}, {
    day: "29-01-2018",
    intervals: [{ start: "10:40", end: "11:00" }, { start: "15:00", end: "15:30" }]
}]
```

As datas referentes ao intervalo devem estar no padrão: DD-MM-YYYY, por exemplo "25-11-2018".

## Dependências

- Express
- Nodemon
- Moment
- Jest
