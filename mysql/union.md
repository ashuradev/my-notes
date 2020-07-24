# Union

O operador `UNION` nos permite combinar o `result set` de dois `SELECT`, mas para isso:

- Cada `SELECT` deverá ter o mesmo número e ordem de colunas.
- Os tipos precisam ser compatíveis ou iguais.

Sintaxe:

```sql
<select1>
UNION [DISTINCT|ALL]
<select2>
```

Dados do exemplo:

```sql
CREATE TEMPORARY TABLE users (
	first_name VARCHAR(200),
	last_name VARCHAR(200),
	id INT PRIMARY KEY AUTO_INCREMENT
);

CREATE TEMPORARY TABLE animals (
	first_name VARCHAR(200),
	last_name VARCHAR(200),
	id INT PRIMARY KEY AUTO_INCREMENT
);

ALTER TABLE users
MODIFY COLUMN id INT AUTO_INCREMENT FIRST;

ALTER TABLE animals
MODIFY COLUMN id INT AUTO_INCREMENT FIRST;

INSERT INTO users 
VALUES
	(DEFAULT, 'Lucas', 'Silva'),
	(DEFAULT, 'Lucas', 'Silva'),
	(DEFAULT, 'Ashura', 'Yukizuki'),
	(DEFAULT, 'Lisa', 'Santos'),
	(DEFAULT, 'Robert', 'Downey');
    
SELECT * FROM users;
    
INSERT INTO animals 
VALUES
	(DEFAULT, 'Mario', 'Jr'),
	(DEFAULT, 'Lisa', 'Santos'),
	(DEFAULT, 'Robert', 'Downey'),
	(DEFAULT, 'Pinguim', 'Santos'),
	(DEFAULT, 'Ana', 'Julia');

SELECT * FROM animals;
```

Exemplo:

```SQL
(SELECT first_name, last_name FROM users)
UNION
(SELECT first_name, last_name FROM animals);
```

|first_name|last_name|
|----------|----------
|Lucas|Silva|
|Ashura|Yukizuki|
|Lisa|Santos|
|Robert|Downey|
|Mario|Jr|
|Pinguim|Santos|
|Ana|Julia|

Nesta query:

- Irá mesclar os nomes de usuários e animais.
- O `UNION`, por padrão, retorna resultados distintos.
- O `UNION` utiliza os nomes das colunas do primeiro `SELECT`.

## Retornando linhas duplicadas

Para retornar linhas duplicadas (o que não vem por padrão no `UNION`), você deverá utilizar `UNION ALL`:

```SQL
(SELECT first_name, last_name FROM users)
UNION ALL
(SELECT first_name, last_name FROM animals);
```

|first_name|last_name|
|----------|----------
|Lucas|Silva|
|Lucas|Silva|
|Ashura|Yukizuki|
|Lisa|Santos|
|Robert|Downey|
|Mario|Jr|
|Lisa|Santos|
|Robert|Downey|
|Pinguim|Santos|
|Ana|Julia|

## Aliases

Para alterar os nomes das colunas, você deverá adicionar apelidos nas colunas do primeiro `SELECT`:

```SQL
(SELECT first_name AS 'Primeiro nome', last_name AS 'Sobrenome' FROM users)
UNION
(SELECT first_name, last_name FROM animals);
```

|Primeiro nome|Sobrenome|
|----------|----------
|Lucas|Silva|
|Ashura|Yukizuki|
|Lisa|Santos|
|Robert|Downey|
|Mario|Jr|
|Pinguim|Santos|
|Ana|Julia|

## Diferenciando linhas

Para ajudar você a diferenciar linhas, você pode selecionar um valor constante nos dois `SELECT` que irão se referir respectivamente aos nomes das tabelas dos dois `SELECT` e então colocar um nome nestes valores (obs.: você pode também utilizar outros valores e nomes):

```sql
(SELECT first_name, last_name, 'users' AS 'tabela' FROM users)
UNION
(SELECT first_name, last_name, 'animals' AS 'tabela' FROM animals);
```

|first_name|last_name|tabela|
|----------|---------|------|
|Lucas|Silva|users|
|Ashura|Yukizuki|users|
|Lisa|Santos|users|
|Robert|Downey|users|
|Mario|Jr|animals|
|Lisa|Santos|animals|
|Robert|Downey|animals|
|Pinguim|Santos|animals|
|Ana|Julia|animals|

**Obs.:** Há linhas com o `first_name` e `last_name` duplicados que vieram no `UNION` mesmo assim, mas no entanto lembre-se que o `UNION` remove apenas linhas com **todos os valores** das colunas duplicados, e neste caso há linhas com os mesmos `first_name` e `last_name` mas com os valores de `tabela` diferentes.

## Order by

Para utilizar o `ORDER BY` no resultado do `UNION`, você deverá adicionar um `ORDER BY` no **final do último** `SELECT`:

```sql
(SELECT CONCAT(first_name, ' ', last_name) full_name, 'users' AS 'tabela' FROM users)
UNION
(SELECT CONCAT(first_name, ' ', last_name) full_name, 'animals' AS 'tabela' FROM animals)
ORDER BY full_name;
```