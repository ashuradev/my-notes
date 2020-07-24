# Joins

Os joins nos permitem unir linhas de duas ou mais tabelas utilizando colunas em comum destas tabelas.

## Tipos de joins

### Cross join

O cross join obtém uma linha da tabela A e combina com todas as linhas da tabela B e assim sucessivamente.

### Inner join

O inner join combina uma linha da tabela A com uma linha da tabela B se estas linhas satisfazerem uma condição chamada **join predicate**. Em outras palavras, ele relaciona uma linha da tabela A com uma linha da tabela B com base numa coluna em comum.

### Left join

O left join, ou left outer join, nos permite selecionar as linhas que satisfazem o **join predicate** e também **todas** as linhas da tabela **a esquerda**. Ou seja, as linhas da tabela **a esquerda** são sempre incluídas mesmo que não há uma correspondência a tabela a direita.

### Right join

O right join, ou right outer join, nos permite selecionar as linhas que satisfazem o **join predicate** e também **todas** as linhas da tabela **a direita**. Ou seja, as linhas da tabela **a direita** são sempre incluídas mesmo que não já uma correspondência a tabela a esquerda.

# Conclusão

Os joins nos permitem obter informações de uma linha de uma tabela B relacionada com uma linha de uma tabela B.
