## <p align="center">CRUD com node.js | express.js | sqlite</p>

Este projeto é uma aplicação backend que tem como operações CRUD (Create, Read, Update, Delete) usando `Node.js`, `Express` e `SQLite`. A aplicação permite a manipulação de dados em um banco de dados SQLite através de uma `API REST`.

## 📋 Requisitos

- Node.js (versão 18 ou superior)
- NPM (Node Package Manager)
- SQLite3

## 🚀 Instalação

O banco de dados SQLite já está criado na aplicação.

 ### Clone o projeto


```bash
  git clone https://github.com/ismael-henrique-dev/API-sqlite-express-nodejs.git
```

### Entre no diretório do projeto

```bash
  cd API-sqlite-express-nodejs
```

### Instale as dependências

```bash
  npm install
```

### Inicie o servidor

```bash
  npm run dev
```

O servidor estará rodando em http://localhost:3333.

## 📁 Estrutura do Projeto

```bash
├── src
│    ├── controller
│    │   └── DatabaseSqlite.js
│    ├── app.js
│    ├── configDb.js
├── .gitignore
├── README.md
├── database.db
├── package-lock.json
├── package.json

```

- **src/:** Diretório principal contendo os arquivos de código-fonte da aplicação.
- **controller/:** Diretório que contém os controladores da aplicação.
- **DatabaseSqlite.js:** Controlador responsável pelas operações de banco de dados usando SQLite.
- **app.js:** Arquivo principal da aplicação, que configura e inicializa o servidor Express.
- **configDb.js:** Arquivo de configuração do banco de dados, responsável pela conexão e configuração do SQLite.
- **.gitignore:** Arquivo que especifica quais arquivos e diretórios devem ser ignorados pelo Git.
- **README.md:** Arquivo com a documentação do projeto.
- **database.db:** Arquivo do banco de dados SQLite.
- **package-lock.json:** Arquivo que trava as versões exatas das dependências instaladas.
- **package.json:** Contém informações sobre o projeto e as dependências necessárias.

## 🛣️ Rotas da API





