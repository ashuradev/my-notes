396

# Limit

Para limitar os resultados de uma consulta `SELECT` utilize a cláusula `LIMIT`.

Sintaxe de exemplo:

```sql
SELECT 
    networth_in_millions networth,
    first_name
FROM
    actors
ORDER BY
    networth DESC, BINARY first_name
LIMIT <limite>;
```

Onde `<limite>` é o total de resultados que você deseja.

Você pode alterar a partir de qual posição deseja começa a extração de linhas com a palavra-chave `OFFSET`.

```sql
SELECT
    *
FROM 
    actors
LIMIT 5 OFFSET 1;
```

Nesta consulta SQL, a extração irá depois do deslocamento. `OFFSET` é basicamente um comando para 'deslocar'.

Também podemos utilizar a seguinte sintaxe:

```sql
SELECT
    *
FROM
    actors
LIMIT <offset>, <limit>;
```