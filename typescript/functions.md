# Functions

- O compilador *pode* descobrir o tipo de retorno de cada função apenas olhando a instrução de retornando, o que faz desnecessário adicionar o tipo de retorno na maioria dos casos.

## Function type

Descreve os tipos dos parâmetros e de uma função:

```ts
const sum: (x: number, y: number) => number = (xis: number, episolon: number) => xis + episolon;

console.log(sum(1, 2)); // --> 3
```

## Inferindo os tipos

- O compilador consegue inferir os tipos de uma função mesmo que só tenha em um "lado da equação":

```ts
let myAdd = function (x: number, y: number): number {
    return x + y;
};

// x e y tem o tipo number
let myAdd2: (baseValue: number, increment: number) => number = function (x, y) {
    return x + y;
};
```

- Isto é chamado de *contextual typing*, assim diminui a quantidade de "tipagem" no seu código.

## Parâmetros opcionais e default

- O número de argumentos para uma função deverá ser o mesmo número de parâmetro da função.

- Para deixar um parâmetro opcional adicione `?` depois do nome do parâmetro:

```ts
function sum(x, y?: number, z?: number) {
    if (z) return x + y + z;
    if (y) return x + y;
    return x;
}
```

- Os parâmetros opcionais devem estar na frente dos parâmetros obrigatórios:

```ts
function sum(x, y?: number, z?: number) {
    if (z) return x + y + z;
    if (y) return x + y;
    return x;
}
```

- Os parâmetros inicializados por padrão podem vim antes dos parâmetros obrigatórios, diferentemente dos parâmetros opcionais.

- O tipo de uma parâmetro inicializado por padrão é o tipo do *valor padrão*:

```ts
function build1(x: number, y = 'eae') {}

function build2(x: number, y?: string) {}

build1(1);
build1(1, undefined);
build1(1, 'suave');
build2(1);
build2(1, 'blz');
```

- `build1` e `build2` compartilham o mesmo *tipo de função* que é `(x: number, y?: string)`.

## Rest parameters

- Um rest parameter é um grupo de parâmetros, eles são tratados como parâmetros opcionais ilimitados:

```ts
function hello(...names: string[]) {}
```

- As arrow functions capturam o this de onde elas foram criadas.

## This parameters

- Define o tipo do `this` de uma função:

```ts
const foo = {
    bar: 1,
    baz: function () {

    }
};
```

- O `this` de uma *function expression* é sempre *any*, pois o `this` será definido **quando** a função for chamada.

## Sobrecargas

- São vários tipos de funções para uma função em específica:

```ts
function foo(x: number[]): number[];
function foo(x: number): number;
function foo(x: any): any {
    return x;
}
```

- Ao chamar uma função, o verificador de tipo para verificar qual sobrecarga é a correta, escolhe a primeira sobrecarga e então tenta passar os argumentos fornecidos para ela e se esta sobrecarga não aceitar, o verificador de tipo irá verificar as próximas sobrecargas.

- Por isso, é importante que você ordene a lista de sobrecargas para a mais específica para a menos específica.