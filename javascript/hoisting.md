# Hoisting

Hoisting é a capacidade do JavaScript em levar funções e variáveis ao topo de um script. 

Em variáveis, *apenas* a sua declaração é `hoisted` (levada ao topo), ou seja, a inicialização de uma variável não é `hoisted`.

Já em funções, a sua declaração e corpo é `hoisted`.

Exemplo:

```js

// o console.log mostrará undefined pois apenas 
// a declaração de x foi levada ao topo ao invés de sua inicialização.
console.log(x); 
var x = 5;

//---------------------------------------------------------

y = 5;
console.log(y); // Agora console.log mostrará 5
var y;

//---------------------------------------------------------

// A declaração e o corpo da função z foi hoisted.
z(); // Mostrará 10 no console
function z() {
    console.log(10);
}

``` 