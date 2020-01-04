# O que são let e const no JavaScript (ES6)

O `let` nos permite declarar uma variável que estará disponível somente em um escopo de bloco.
Já o `const` nos permite declarar um valor que nunca mudará, e se você tentar reatribuir um valor a uma constante, será lançado um erro. 

É recomendado utilizar `const` quando você quer declarar um valor que não será alterado e `let` caso você precisa alterar um valor.

Exemplos:

```js

let minhaVariavel = 'lucas';
const minhaConstante = 'josé';

minhaVariavel = 'douglas'; /* agora `minhaVariavel` terá 'douglas' como valor */
minhaConstante = 'lucas'; /* será lançado um erro, pois você não pode alterar o valor de uma constante, afinal isso é constante :p */

```