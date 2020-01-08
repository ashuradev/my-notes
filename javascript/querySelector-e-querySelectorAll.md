# Métodos document.querySelector e document.querySelectorAll

Os métodos document.querySelector e document.querySelectorAll nos permite obter elementos através de seletores CSS. A diferença entre estes dois métodos é que o document.querySelector nos retorna o primeiro elemento e o document.querySelectorAll nos retorna todos os elementos.

```html
<h1>Teste</h1>
<h1>Testando</h1>

<script>
    const teste = document.querySelector('h1'); // Vai retornar o <h1>Teste</h1>
    const todosOsH1 = document.querySelectorAll('h1'); // retorna uma lista de h1

    teste.style.color = 'red'; // muda a cor do <h1>Teste</h1> para vermelho
</script>
```