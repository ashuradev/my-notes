# Variáveis globais no JavaScript

Variáveis que não são declaradas dentro de uma função se torna uma variável global. Variáveis globais podem serem acessadas em qualquer lugar em qualquer script da sua página.

```html
<!-- script1.js -->
<script>
    var mensagem = 'teste';

    function mostrar()
    {
        console.log(mensagem); // --> 'teste'
    }
</script>
<!-- meuoutroscript.js -->
<script>
    console.log(mensagem); // --> 'teste'
</script>
```

Variáveis que são atribuidas sem terem sido declaradas, se tornam uma variável global.
```html
<script>
    function teste()
    {
        var teste1;
        teste1 = 'tudo bem?';
        teste2 = 'oi';
    }
    teste();
    console.log(teste2); // 'oi'
    console.log(teste1); // ReferenceError: teste1 is not defined
</script>
```