## <p align="center">CRUD com node.js | express.js | sqlite</p>

Este projeto é uma aplicação backend que tem como operações CRUD (Create, Read, Update, Delete) usando `Node.js`, `Express` e `SQLite` para produtos. A aplicação permite a manipulação de dados em um banco de dados SQLite através de uma `API REST`.

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

Abaixo estão as rotas disponíveis na API e suas respectivas funcionalidades.

### Criar um novo produto

O `id` é criado automaticamente pelo servidor através do `UUID`.

**Rota:** POST `/`

Exemplo de Corpo da Requisição:

```json
{
 "name": "Notebook",
 "price": 3400,
 "description": "8gb ram, 256gb ssd, tela IPS"
}
```

Resposta:

**"Product created successfully."**

### Listar todos os produtos

**Rota:** GET `/`

Resposta: 

```json
[
 {
  "id": "bf4826a7-dc48-4de2-b439-401cb1c13606",
  "name": "Notebook",
  "price": 3400,
  "description": "8gb ram, 256gb ssd, tela IPS"
 },
 {
  "id": "893e9a73-2e49-4152-b361-da25ddc12e7b",
  "name": "Smartphone",
  "price": 1300,
  "description": "6gb ram, 128gb inteno, tela IPS"
 }
]
```

### Atualizar um produto

**Rota:** PUT `/:id`

Exemplo de Corpo da Requisição:

```json
{
"name": "Notebook (atualizado)",
"price": 3200,
"description": "8gb ram, 256gb ssd, tela IPS"
}
```

Resposta:

**"Product updated successfully."**

### Deletar um produto

**Rota:** DELETE `/:id`

Resposta:

**"Product deleted seccessfully."**



