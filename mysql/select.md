# Select

`Select` é uma declaração do MySQL que obtém dados de colunas ou expressões de uma ou mais tabelas.

A sintaxe do `SELECT` é basicamente a seguinte:

```sql
SELECT <colunas>
    [FROM <tabela>]
    [WHERE <condicoes>];
```

O `FROM` é uma cláusula que especifica as tabelas que serão selecionadas.
O `WHERE` é uma clásula que especifica as condições das linhas que vão estar no `result set` do `SELECT`.