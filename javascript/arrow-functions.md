# arrow-functions

```js

/**
 * Novas funcionalidades do ES6: Arrow functions.
 * 
 * Arrow functions são uma nova forma trazida no ES6 de criar funções utilizando uma
 * sintaxe menos verbosa.
 */

// Antes do ES6

var sum = function (a, b) {
    return a + b;
};

// Depois do ES6

const sum = (a, b) => {
    return a + b
};

/**
 * Algumas observações:
 *  - Você pode omitir as chaves quando só tiver um return:
 *      const sum = (a, b) => a + b
 */

```