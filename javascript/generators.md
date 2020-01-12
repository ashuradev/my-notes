// Uma introdução bem básica a generators no ES6 (JavaScript)

// Generators são funções que podem ser pausadas e retomadas de onde foi pausada ao longo da execucação do seu script.

// Você deve usar function* para criar uma função generator
function* counter() {
    let i = 0;
    // o yield serve para retornar um valor para o usuário do generator e então pausa o generator
    // este yield abaixo irá retornar 1 para quem estiver usando o generator e então pausa o generator até alguém chamar ele denovo
    console.log('o counter foi pausado com o yield');
    yield ++i;
    console.log('o counter foi retomado com o método next()');
    yield ++i; // retorna 2 para quem estiver usando o generator
}
// você precisa chamar o generator para usar ele
const meuContador = counter();

// o método next serve para iniciar ou retomar o generator até que um yield seja encontrado. Ao encontrar o yield, o next() irá retornar um objeto com uma propriedade value que guarda o valor que o yield retornou e uma propriedade done que indica se o generator finalizou.
// -> { value: 1, done: false }
console.log(meuContador.next());
// -> { value: 2, done: false }
console.log(meuContador.next());
// -> { value: undefined, done: true }
console.log(meuContador.next());