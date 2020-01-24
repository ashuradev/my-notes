# Introdução ao ZeptoJS

Zepto é uma biblioteca JavaScript minimalista para manipular o DOM com uma API igual ao do jQuery, ou seja, se você utiliza jQuery você consegue utilizar Zepto da mesma forma. A vantagem de utilizar o Zepto em relação ao jQuery é que ele é muito leve.

Para utilizar o Zepto você pode adicionar este script na sua página:

```html
<script src="https://zeptojs.com/zepto.min.js"></script>
```

E então começar a utilizar o Zepto:

```js
$('.exemplo').click(function () {
    alert('cliquei no elemento .exemplo');
});

$.ajax({
    type: 'POST',
    url: '/api/users',
    dataType: 'json',
    success: function () {
        alert('registrou');
    }
});
```

Para ver mais sobre o Zepto, você pode consultar sua documentação em https://zeptojs.com/