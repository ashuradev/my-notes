# Joins

Os joins nos permitem unir linhas de duas ou mais tabelas utilizando colunas em comum destas tabelas ou não (no caso dos cross joins). Em outras palavras, ele **junta** linhas de uma tabela com linhas de uma outra tabela **numa** condição.

## Tipos de joins

O MySQL provém os seguintes tipos de joins: Cross join, inner join, left join e right join.

### Cross join

O cross join obtém uma linha da tabela A e combina com todas as linhas da tabela B e assim sucessivamente.

```sql
SELECT pessoas.nome AS 'Nome da pessoa', cursos.nome AS 'Nome do curso'
FROM pessoas
CROSS JOIN cursos;
```

Nesta query:

- Cada linha da tabela pessoas é combinada com as linhas da tabela cursos.

### Inner join

O inner join combina uma linha da tabela A com uma linha da tabela B se estas linhas satisfazerem uma condição chamada **join predicate**. Em outras palavras, ele relaciona uma linha da tabela A com uma linha da tabela B com base numa coluna em comum.

```SQL
SELECT pessoas.nome AS 'Nome da pessoa', cursos.nome AS 'Nome do curso preferido'
FROM pessoas
INNER JOIN cursos ON pessoas.cursopreferido = cursos.idcurso;
```

Nesta query:

- A **junção** de cada linha da tabela pessoa e da tabela curso ocorrerá quando haver uma coluna em comum entre elas.

### Left join

O left join, ou left outer join, nos permite selecionar as linhas que satisfazem o **join predicate** e também **todas** as linhas da tabela **a esquerda**. Ou seja, as linhas da tabela **a esquerda** são sempre incluídas mesmo que não há uma correspondência a tabela a direita.

```sql
SELECT pessoas.nome as 'Nome da pessoa', cursos.nome AS 'Nome do curso preferido'
FROM pessoas
LEFT JOIN cursos ON pessoas.cursopreferido = cursos.id_do_curso;
```

Nesta query:

- A **junção** das linhas das tabelas pessoas e cursos começará **à esquerda** utilizando uma **coluna em comum** que é o *id do curso*.
- As linhas da esquerda que não houver correspondência nas linhas da direita **serão incluídas**, ou seja, as pessoas que não preferem cursos **serão incluídas**.

### Right join

O right join, ou right outer join, nos permite selecionar as linhas que satisfazem o **join predicate** e também **todas** as linhas da tabela **a direita**. Ou seja, as linhas da tabela **a direita** são sempre incluídas mesmo que não já uma correspondência a tabela a esquerda.

```sql
SELECT pessoas.nome as 'Nome da pessoa', cursos.nome AS 'Nome do curso'
FROM pessoas
RIGHT JOIN cursos ON pessoas.cursopreferido = cursos.idcurso;
```

Nesta query:

- A **junção** das linhas das tabelas pessoas e cursos começará **à direita** utilizando uma **coluna em comum** que é o *id do curso*.
- As linhas da direita que não houver correspondência nas linhas da esquerda **serão incluídas**, ou seja, os cursos que não são preferidos **serão** incluídos mesmo assim.

### Self join

Um self join acontece quando há um join entre uma tabela e ela mesma.

## Join com três tabelas ou mais

Você também pode utilizar joins com três tabelas ou mais quando você precisa conectar linhas destas tabelas:

```sql
SELECT p.name AS person, c.name AS course FROM pessoa p
INNER JOIN pessoa_assiste_curso a ON a.idperson = p.id 
INNER JOIN cursos c ON c.id = a.idcourse;
```

# Conclusão

Os joins nos permitem obter informações de uma linha de uma tabela B relacionada com uma linha de uma tabela A.
