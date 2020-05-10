# DELETE

A instrução `DELETE` é utilizada para remover linha(s) a partir de uma tabela.

Sintaxe:

```sql
DELETE FROM users;
```

Você pode adicionar a cláusula `WHERE` para adicionar condições para que está linha seja excluída.

Exemplo:

```sql
DELETE FROM users
WHERE name = 'Teste';
```

Observe que a comparação de strings no WHERE não diferencia de maiuscula e minuscula (case-insensitive). Isto quer dizer que nesta consulta qualquer linha que tiver nomes como 'Teste', 'TESTE', 'TeStE' serão excluidas.

Você também pode utilizar a cláusula `LIMIT` para limitar as linhas.

```sql
DELETE FROM users 
LIMIT 5;
```

`ORDER BY` também:

```sql
DELETE FROM users
ORDER BY id DESC
LIMIT 5;
```

Com isso irá deletar as últimas 5 linhas. Exemplo de como o comando funciona:

Tabela:

| id |
|----|
| 1  |
| 2  |
| 3  |
| 4  |
| 5  |
| 6  |
| 7  |
| 8  |
| 9  |
| 10 |
| 11 |
| 12 |
| 13 |
| 14 |
| 15 |

1. Ordene as linhas pelo id de forma decrescente:

| id |
|----|
| 15 |
| 14 |
| 13 |
| 12 | 
| 11 | 
| 10 | 
| 9  |
| 8  |
| 7  |
| 6  |
| 5  |
| 4  |
| 3  |
| 2  |
| 1  |

2. Limita 5 linhas.

| id |
|----|
| 15 |
| 14 |
| 13 |
| 12 |
| 11 |

3. Exclua tudo.

Tabela:

| id |
|----|
| 1  |
| 2  |
| 3  |
| 4  |
| 5  |
| 6  |
| 7  |
| 8  |
| 9  |
| 10 |