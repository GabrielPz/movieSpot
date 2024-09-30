# MovieSpot

Este é o projeto **MovieSpot**. Uma plataforma multitenant para alugar filmes como um usuário, ou gerenciar filmes como um administrador. A aplicação se adapta com base no nivel de acesso do usuário logado, liberando ou restringindo funcionalidades.

Acesso Admin:
- email: admin@moviespot.com
- senha: Admin123

## Capturas de Tela

### Tela Inicial(Cliente - Deslogado)

![Tela Inicial](screenshots/client/home.png)

### Tela de Filme

![Tela de Login](screenshots/client/movie.png)

### Tela de Administração

![Tela de Administração](screenshots/admin/listMovies.png)
![Tela de Administração(Criar/Atualizar Filme)](screenshots/admin/createUpdateMovie.png)

## Frontend

O **Frontend** foi desenvolvido utilizando o framework Next.js e Material UI para a criação de componentes de interface modernos e responsivos. As requisições HTTP são realizadas por meio do Axios, integrado ao OpenAPI, o que garante uma arquitetura altamente escalável para a criação de services e chamadas de API.

A integração com APIs é baseada em um swagger fornecido pelo backend, que atua como um contrato, permitindo a geração automática de factories de API por meio do OpenAPI. Isso resulta em um bundle de factories já configurado com o Axios, o que simplifica e acelera a comunicação com qualquer API, tornando o processo de integração extremamente ágil e escalável.

Além disso, toda a aplicação foi desenvolvida com suporte a TypeScript, garantindo maior segurança tipológica, autocompletes mais precisos e uma melhor manutenção do código ao longo do tempo.

### Estrutura do **Frontend**

O **Frontend** foi utiliza o App Router do Next.js, adotando uma estrutura modular de pastas e componentes compostos. As páginas dentro da aplicação são construídas com base em módulos. Por exemplo, o módulo home contém todos os componentes e estruturas necessários para renderizar a página inicial, encapsulando sua lógica e interface de maneira organizada.

Além disso, o sistema faz uso de componentes compostos, o que permite uma grande flexibilidade e reutilização. Um exemplo disso é o componente <Movie.Root>, que agrupa outros componentes internos como <Movie.Details /> e <Movie.Actions />, formando uma estrutura altamente customizável:

<Movie.Root>
<Movie.Details />
<Movie.Actions />
</Movie.Root>

Essa abordagem possibilita que diferentes partes da aplicação possam ser customizadas ou reutilizadas conforme necessário, sem perder a coesão estrutural, aumentando a eficiência e a manutenção do código.

## Backend

O **Backend** foi desensolvido utilizando Prisma, junto a fastify e OpenAPI. O Prisma é um ORM moderno que simplifica a comunicação com o banco de dados, permitindo a criação de queries de maneira mais intuitiva e segura. O Fastify é um framework web altamente performático, que garante uma comunicação rápida e eficiente entre o frontend e o banco de dados. O OpenAPI é uma especificação que define um padrão para a criação de APIs RESTful, permitindo a geração automática de documentação e factories de API.

Caso o **Backend** veja que não existem filmes nem usuário cadastrados, o mesmo irá realizar um script de seed no banco de dados com dados fictícios para facilitar a visualização e teste da aplicação.

### Estrutura do **Backend**

O **Backend** segue uma estrutura de schemas, responsaveis pelos modelos de dados, controllers, responsaveis pela lógica de negócio, e services, responsaveis pela comunicação com o banco de dados. Essa estrutura modular permite uma melhor organização e manutenção do código, além de facilitar a escalabilidade e a adição de novas funcionalidades. Além disso , o backend foi desenvolvido junto a ferramenta de geração automática de Documentação do Fastify, que gera automaticamente uma documentação interativa da API, permitindo que os desenvolvedores possam testar e entender a API de maneira mais eficiente.

## Banco de Dados

O Banco de dados selecionado foi o PostgreSQL, um banco de dados relacional altamente escalável e seguro.
No banco de dados temos as seguintes tabelas:

- movies: Tabela que armazena os filmes disponíveis para aluguel.
- users: Tabela que armazena os usuários cadastrados na plataforma.
- RentedMovies: Tabela que armazena os aluguéis realizados pelos usuários.
- whishlist: Tabela que armazena os filmes adicionados a lista de desejos dos usuários(frontend ainda não possuí integração com essa tabela).
  -forgot-password: Tabela que armazena os tokens de recuperação de senha dos usuários(frontend ainda não possuí integração com essa tabela).

## Pré-requisitos

Antes de começar, verifique se você tem os seguintes softwares instalados:

- [Node versão recomendada: 18.17x ou superior](https://nodejs.org/pt)
- [Npm](https://www.npmjs.com/)
- [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable)

## Tecnologias utilizadas

- **Next.js**: Framework de React para aplicações web.
- **React**: Biblioteca para construção de interfaces de usuário.
- **Material UI (MUI)**: Componentes de interface baseados no Material Design.
- **Axios**: Biblioteca para requisições HTTP.
- **TypeScript**: Linguagem de tipagem estática.
- **Prisma**: ORM para comunicação com o banco de dados.
- **Fastify**: Framework web altamente performático.
- **OpenApi**: Especificação para criação de APIs RESTful.
- **OpenApiTools**: Ferramenta para geração de factories de API.
- **PostgreSQL**: Banco de dados relacional.
- E várias outras dependências detalhadas abaixo.

## Instalação e Configuração

### Passo a Passo

1. Entre na raiz do projeto

```bash
cd [caminho/para/o/projeto]
```

2. Na raiz do projeto, instale as dependências do backend com o comando:

```bash
npm run install:back
# ou, se estiver utilizando Yarn
yarn install:back
```

2. Após instalar as dependências do backend, instale as dependências do frontend com o comando:

```bash
npm run install:front
# ou, se estiver utilizando Yarn
yarn install:front
```

### Configuração das Variáveis de Ambiente

O projeto utiliza arquivos .env para configuração. Para configurar as variáveis de ambiente do **Backend**, renomeie o arquivo `.env.example` para `.env` na pasta packages/backend e adicione as seguintes variáveis:

```yaml
# Variável interna para conexão com o banco de dados
DATABASE_URL="postgresql://postgres:admin@localhost:5432/movie_spot?sslmode=prefer"

# Variável interna para assinar os tokens JWT(pode copiar e colar)
SECRET_KEY_JWT="secret"
```

O projeto utiliza arquivos .env para configuração. Para configurar as variáveis de ambiente do **Frontend**, renomeie o arquivo `.env.example` para `.env` na pasta packages/backend e adicione as seguintes variáveis:

```yaml
# Variável interna para conexão com a API
NEXT_PUBLIC_API_URL="http://localhost:8000"
```

Após realizar a configuração das variaveis de ambiente, você precisa configurar o banco de dados. Para isso, você deve ter um banco de dados PostgreSQL instalado e configurado. Você pode instalar o PostgreSQL seguindo as instruções no site oficial: [PostgreSQL](https://www.postgresql.org/download/). Após instalar o PostgreSQL, você pode criar um banco de dados com o nome `movie_spot` e configurar o usuário e senha.

Em seguida entre na raiz do projeto e execute o comando para criar as tabelas no banco de dados:

```bash
npm run install:db
# ou
yarn install:db
```

## Execução

Após instalar as dependências e configurar as variáveis de ambiente, você pode rodar o projeto indo até a raiz da aplicação e executando localmente os seguintes comandos:

Back:

```bash
npm run run:back
# ou
yarn run:back
```

Front:

1 - Realize o build do frontend com o comando:

```bash
npm run build:front
# ou
yarn build:front
```

2- Inicie o servidor do frontend com o comando:

```bash
npm run start:front
# ou
yarn start:front
```

A API estará disponível em http://localhost:8000.
A **Documentação da APi** estará disponível em http://localhost:8000/docs.
o **Frontend** estará disponível em http://localhost:3000.

## Troubleshooting

### Problemas Comuns

1. **Erro de versão do Node**
   Certifique-se de que está utilizando a versão correta do node. Verifique a versão com:

```bash
node -version
```

2. **Verificar as variaveis de ambient de cada projeto no `.env`**:
   Todas as variaveis precisam estar configuradas corretamente para o funcionamento do projeto.

3. **Verificar a url de conexão do banco no `.env`**:
   A url precisa seguir o padrão aceito pelo prisma `postgresql://[user]:[password]@[host]:[port]/[database]`
