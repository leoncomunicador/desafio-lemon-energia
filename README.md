# Boas vindas ao repositório Lemon Energia
Projeto feito durante processo seletivo para o cargo de desenvolvedor back-end jr para a Lemon Energia 

# Sumário

- [Comentários sobre o desafio](#comentários-sobre-o-desafio)
- [Construção do desafio](#construção-do-desafio)
- [Tecnologias envolvidas](#tecnologias-envolvidas)
- [Requisitos do desafio](#requisitos-do-desafio)
- [Requisitos desenvolvidos](#requisitos-desenvolvidos)
- [Testes](#testes)
- [Referências](#referências)
- [Instalação e uso](#instalação-e-uso)

---

#  Comentários sobre o desafio

Achei o projeto interessante, por ser voltado ao setor de energia sustentável. Nessa simulação, para saber se um cliente é ou não elegível para participar do programa, foram passados os parâmetros e utilizado Node.JS, Javascript, lógica de programação e um pouco de testes TDD.

---

# Construção do desafio

Inicialmente optei por estudar o desafio passado no link e entender as respostas que a requisição deveria entregar na simulação da elegebilidade ou não de um novo cliente para Lemon Energia. Optei por utilizar as camadas de models, separados por arquivos e controllers fazendo a requisição de sucesso para trazer legibilidade a proposta da entrega do projeto.

No arquivo index.js, foi colocado todo o esqueleto necessário para rodar a aplicação, e optei por utilizar middlewares para tratar casos de erro.

Etapas de organização e desenvolvimento do projeto:

 1. Interpretação dos requisitos
 2. Desenvolvimento do projeto
 3. Criação de testes

---

# Tecnologias envolvidas:
[Express](https://expressjs.com/pt-br/): Utilizado para criação da rota POST

[Jest](https://jestjs.io/pt-BR/): Utilizado para o desenvolvimento dos testes unitários

---

# Requisitos do desafio:


 - API para checar a elegibilidade ou não de um novo cliente para a Lemon Energia.
 - Se o cliente for elegível, iremos receber os parâmetros: {  "elegivel":  true,  "economiaAnualDeCO2":  valor respectivo de sua economia  }
 
 - Se não, será apresentado como saída, as razões de sua inelegibilidade: { "elegivel": false, "razoesInelegibilidade": [ Razões de sua não aprovação ] }

---

# Requisitos desenvolvidos:

 1.Criação da API
 2. Cadastro do cliente
 3. Validação ou não de sua elegibilidade
 4. Aplicação de testes TDD

---



# Testes

Realizei testes que mostram sucesso ou negativa de um novo cliente.

Para execução dos testes abra o terminal e digite `npm test`

<a href="https://ibb.co/k8hK0g5"><img src="https://i.ibb.co/4TjWMZK/tela-testes.png" alt="tela-testes" border="0"></a><br /><a target='_blank' href='https://pt-br.imgbb.com/'></a><br />
---


#  Referências

Totalmente baseado no desafio com o link:
https://lemonenergy.notion.site/Teste-Backend-Lemon-9958a9678c0d4ac99185850fdb9716fc

---
# Instalação e uso

Para executar o projeto sua máquina deve satisfazer os requisitos abaixo.  
  
Pré-requisitos  
  
  
 - node v17.5.0  
 - npm 8.6.0  
 - git version 2.25.1  
  
  
  
[Download node js](https://nodejs.org/en/)  
  
[Download git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)  
  
### Clonando o projeto  
  
Abra o terminal de sua máquina

> Caso queira use um dos atalhos abaixo de acordo com o seu sistema
> operacional
>  - *Linux*: Ctrl+Alt+T
>  - *MacOS*: COMMAND + ESPAÇO
>  - *Windows*: Tecla do Windows + R

e digite o comando abaixo para clonar o projeto.  
  
  
git clone [https://github.com/leoncomunicador/desafio-lemon-energia.git](https://github.com/leoncomunicador/desafio-lemon-energia.git)  
  
  
  
Ainda Entre na pasta  
  
  
cd desafio-lemon-energia
  
  
  
### Instalando as dependências  
  
  
npm install  
  
  
  
### Executando o projeto  
  
  
npm run dev
  
  
---------

### Executando o projeto

A api permite uso da rota POST.

Utilize o Postman ou o Thunderclient, em seguida escolha a opção POST e insira os seguintes dados no JSON como no exemplo abaixo:

{
  "numeroDoDocumento": "14041737706",
  "tipoDeConexao": "bifasico",
  "classeDeConsumo": "comercial",
  "modalidadeTarifaria": "convencional",
  "historicoDeConsumo": [
    3878,
    9760,
    5976,
    2797,
    2481,
    5731,
    7538,
    4392,
    7859,
    4160,
    6941,
    4597
  ]
}
