```js
// Funções compostas no JavaScript

// Cria função que executa uma coleção de funções
// Onde cada função vai receber uma entrada que corresponde ao retorno 
// da função anterior.
const compose = (...fns) => input => 
    fns.reduceRight((fn, next) => next(fn), input)

const toUppercase = input => input.toUpperCase();
const removeWhitespace = input => input.replace(/\s+/g, '');
const addMessage = input => 'Nome: ' + input;

// Antes
let string1 = toUppercase(removeWhitespace(addMessage('Lucas Bene')));
let string2 = toUppercase(removeWhitespace(addMessage('Lucas Bart')));
console.log(string1); // --> 'NOME:LUCASBENE'
console.log(string2); // --> 'NOME:LUCASBART'

// Depois com compose()
// Executa da direita para esquerda
const funcaoComposta = compose(toUppercase, removeWhitespace, addMessage);

string1 = funcaoComposta('Lucas Bene');
string2 = funcaoComposta('Lucas Bart');

console.log(string1);
console.log(string2);
```