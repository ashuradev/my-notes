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
    
INSERT INTO animals VALUES
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
(SELECT first_name, last_name FROM animals)
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
(SELECT first_name, last_name FROM animals)
```

|first_name|last_name|
|----------|----------
|Lucas     |Silva    |
|Lucas     |Silva    |
|Mario     |Jr       |
|Lisa      |Santos   |
|Lisa      |Santos   |

## Aliases

Para alterar os nomes das colunas, você deverá adicionar apelidos nas colunas do primeiro `SELECT`:

```SQL
(SELECT first_name AS 'Primeiro nome', last_name AS 'Sobrenome' FROM users)
UNION
(SELECT first_name, last_name FROM animals)
```

|Primeiro nome|Sobrenome|
|-------------|----------
|Lucas        |Silva    |
|Mario        |Jr       |
|Lisa         |Santos   |

## Diferenciando linhas

Para ajudar você a diferenciar linhas, você pode selecionar um valor constantes nos dois `SELECT` que se referem respectivamente com os nomes das tabelas dos dois `SELECT` e então colocar um nome nestes valores:

```sql
(SELECT name, 'user' AS entityType FROM users)
UNION
(SELECT name, 'animal' AS entityType FROM animals)
```

## Order by

Para utilizar o `ORDER BY` no resultado do `UNION`, você deverá adicionar um `ORDER BY` no **último** `SELECT`.