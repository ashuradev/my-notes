# 'use strict' no JavaScript

O 'use strict' é uma expressão que indica que seu script deve ser no modo restrito. O modo restrito proibe algumas práticas não recomendadas no JavaScript, o que ajuda a escrever um código mais limpo e com menos bugs difíceis de serem solucionados.

Algumas práticas que o modo restrito proibe são:

* Usar variáveis sem declarar
* Deletar variáveis ou funções
* Atribuir algum valor a `arguments` e `eval`
* Usar palavras-chave que será usada em futuras versões do JavaScript (implements, package, interface, let, public, private, protected, static e yield) como nomes de variáveis.
* Duplicar parâmetros em funções (exemplo: `function createPost(title, title)`)
* Usar `with`.

Exemplos de uso do modo restrito:

```js
// se você colocar 'use strict' no topo do seu script, o modo restrito será ativado para todo o código
'use strict';

function exemplo() {
    // se você usar 'use strict' numa função, o modo restrito só será ativado
    // para a função ao invés para todo o script.
    'use strict';
}
```
