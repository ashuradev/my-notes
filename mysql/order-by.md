# Order by

A clause `order by` é utilizada para ordenar os resultados de uma consulta `SELECT` baseado num critério que especificamos.

Sintaxe:

```sql
SELECT <columns>
FROM <table>
WHERE name LIKE '%s'
ORDER BY <critea>
```

# Critério como uma coluna

Você pode especificar o critério como uma coluna. Assim o `ORDER BY` irá ordenar os resultados a partir desta coluna.

O `ORDER BY` irá ordenar do menor para o maior, para mudar isto adicione a palavra-chave `DESC` que irá ordenar do maior para o menor.

# Especificando mais de uma coluna

Você pode especificar mais de uma coluna no `ORDER BY`, assim se um empate ocorrer com base na primeira coluna, este empate será quebrado com a segunda coluna sendo ordenada no grupo empatado.

Exemplo:

```sql
SELECT salary, name
FROM users
ORDER BY salary, name;
```

| salary | name  |
| 400    | Teste |
| 500    | Alpha |
| 500    | Teste |

Como você pode ver, o `salary` do Alpha e Teste são os mesmos. Então este empate, foi quebrado com a segunda coluna sendo ordenada, porque o Alpha é mais 'alto' maior que Teste.

Nós também pode ordenar estas colunas com o `DESC` ou `ASC`.

Exemplo:

```sql
SELECT salary, name
FROM users
ORDER BY salary DESC, name ASC;
```

| salary | name  |
| 500    | Alpha |
| 500    | Teste |
| 400    | Teste |

```sql
SELECT salary, name
FROM users
ORDER BY salary DESC, name DESC;
```

| salary | name  |
| 500    | Teste |
| 500    | Alpha |
| 400    | Teste |

Por padrão, o MySQL ignora letras maiusculas e minusculas, ou seja, as palavras 'php' e 'pHp' são tratadas igualmente, para desativar isto utilize a palavra-chave `BINARY`, para utilizar uma comparação ASCII e tratar estas palavras diferentemente.

```sql
SELECT salary, name
FROM users
ORDER BY salary DESC, BINARY name DESC;
```

| salary | name  |
| 500    | alpha |
| 500    | alpha | 
| 500    | Teste | 
| 500    | Alpha | 
| 500    | Alpha |

| 400    | alpha |
| 400    | Teste |