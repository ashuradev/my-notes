# Introdução aos banco de dados

Um banco de dados é uma coleção organizada de dados com o intuito de representar aspectos do mundo real.

## SGBD

Um Sistema de Gerenciamento de Banco de Dados é uma coleção de programas com o intuito de fornecer um ambiente para banco de dados.

## Modelo de dados

Um modelo de dados é um conjunto de conceitos para armazenar dados.

### Tipos

- Modelo conceitual: Próximo de como o usuário ira perceber os dados. Exemplo: Modelo Entidade-Relacionamento.

- Modelo lógico: Provém conceitos que o usuário pode entender, mas é mais próximo de como os dados são armazenados. Exemplo: Modelo relacional.

- Modelo físico: O modelo de dados físico representa como os dados são armazenados no computador e retirados dele, ele representa cada tabela, colunas e seus tipos, relacionamentos, dentre outros itens, caso o modelo lógico seja relacional.

## Esquemas

Esquema é sobre como o banco de dados é formado, quais são suas tabelas, colunas, etc. 

## Instâncias de banco de dados

Uma instância do banco de dados é o estado do banco de dados em um dado momento, ou apenas um pedaço.

## Modelo Entidade-Relacionamento (ER)

O modelo ER é um modelo de dados conceitual de alto nível (relembrando, um tipo de modelo de dados que um usuário consegue entender melhor), ele é baseado em dois conceitos.

- Entidades: Um conceito do mundo real. 
- Relacionamentos: Associação ou interação entre entidades.

Exemplo:

Usuário *assiste* Vídeos.

Sendo:
	- `assiste` como relacionamento, representado com verbo.

### Entidades

- Uma entidade é um objeto generalizado do mundo real que difere de outros e cada entidade possui atributos que as caracterizam, ou simplesmente, uma entidade é um conjunto de atributos.

- Uma entidade específica contém os valores de atributos.

#### Atributos

Atributos são características de uma entidade.

##### Atributos simples

São atributos que não pode ser mais dividido.

##### Atributos compostos

São atributos que contém outros atributos atômicos (simples). Ex.: Endereço com rua, cep, etc.

##### Atributos multivalorados

São atributos que contém mais de um valor e não apenas um valor. Exemplo: Telefone de uma pessoa.

##### Atributos derivados

São atributos calculados a partir de outros atributos.

### Chaves

São atributos que serve para identificar tuplas.