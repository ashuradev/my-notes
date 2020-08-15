# Interfaces

- A verificação de tipos no TS é na *forma* que os valores tem
- Interfaces tem o papel de nomear **as formas** que os valores tem.
- Especificando a forma dos objetos

```ts
function bhaskara(equation: { a: number, b: number, c: number }) {

}

bhaskara({ a: 10, b: 20, c: 30 });
```

- Uma interface é um nome que nos permite referir a forma de alguma coisa:
```ts
interface Player {
    x: string;
    readonly y: string; // readonly
    z?: string; // opcional
}
```

- Ao **passar** um **objeto literal** para uma **variável** ou como **argumento**, o objeto deverá ter **propriedades conhecidas** do **tipo de destino**, pois o objeto literal terá **neste** caso uma **verificação excessiva de propriedades**. 

- Para evitar isso, você pode utilizar *type assertions*, *index signatures* ou guardar o objeto literal numa variável e depois referir-se a esta variável:

```ts
interface Post {
    title: string;
}

function createPost(post: Post) {}

// Objeto: { title: 'Teste', texto: 'Olá, mundo' }

// Você consegui atribuir, pois a variável não há um tipo especificado
const post = { title: 'Teste', texto: 'Olá, mundo' }; 

// A variável post não passará por verificações de propriedades excessivas ao passar ela (mas desde que você tenha uma variável em comum entre elas)
createPost(post); 

// ou

createPost({ title: 'Teste', texto: 'Olá, mundo!' } as Post);
```

- Resumidamente, um objeto literal somente pode ter propriedades conhecidas.

## Tipos de função

- Além de descrever os tipos de propriedades de objetos, as interfaces também podem descrever os **tipos de funções**:

```ts
interface Sum {
    (x: number, y: number): number;
}

function adicionaDois(sum: Sum, x: number) {
    return sum(x, 2);
}

let sum: Sum;

// os nomes dos parâmetros não precisam ser iguais
sum = (xis: number, ipisilon: number) => xis + ipisilon;

adicionaDois(sum);
```

- Você não precisa dizer os tipos dos parâmetros pois graças a *tipagem contextual* do TS, ele descobre o tipo de cada argumento:

```ts
let sum: Sum;

sum = (xis, ipisilon) => xis + ipisilon;
```

## Tipos indexáveis

- Nós podemos descrever **tipos que podemos "indexar"**: a[15] ou a["kk"]:

```ts
// tipo indexável
interface Teste {
    // assinatura do índice
    [index: number]: string;
}
```

- A *assinatura do índice* descreve um tipo que podemos utilizar para indexar e o tipo de retorno correspondente.

- Pode haver dois tipos de indexadores, strings ou números, mas o tipo retornado do indexador do número precisa ser um subtipo do tipo de retorno do indexador da string:

```ts
interface Animal {
  name: string;
}

interface Dog extends Animal {
  breed: string;
}

interface NotOkay {
  // Erro, o tipo de retorno do number não é subtipo do indexador string
  [x: number]: Animal;
  [x: string]: Dog;
}
```

- As assinaturas de índices de strings obriga que todas as propriedades "conhecidas" sejam um subtipo de seu retorno:

```ts
interface Teste {
    [x: string]: number;
    teste: number;
    lixo: string; // erro
}
```

## Implementando uma interface

```ts
interface Entity {
    type: string;
    body?: string;
}

interface Reader {
    entitiesRead: Entity[];
    read(entity: Entity): any;
}

class ArticleReader implements Reader {
    entitiesRead = [];

    read(entity) {

    }
}
```

- Você **NÃO** pode ter métodos privados nas interfaces.

- O TS somente verifica o lado da instância de uma classe quando você implementa uma interface:

```ts
interface Foo {
  // aqui é o lado estático pois o construtor é do lado estático
  new(str: string);
}

class Bar implements Foo {
  new(str: string) {

  }
}
```