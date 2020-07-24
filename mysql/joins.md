# Joins

Os joins nos permitem unir linhas de duas ou mais tabelas utilizando colunas em comum destas tabelas.

## Tipos de joins

### Cross join

O cross join obtém uma linha da tabela A e combina com todas as linhas da tabela B e assim sucessivamente.

Exemplo:

Tabela Usuário - (nome, email, id)  
	- ('Lucas', 'aa@aa.com', 1)  
	- ('Lisa', 'bb@bb.com', 2)  

Tabela Post - (titulo, author_id):  
	- ('Os Joins no MySQL', 1)  
	- ('Os posts', 2)  

Usuário `CROSS JOIN` Post (nome, email, id, titulo, author_id):  
	- ('Lucas', 'aa@aa.com', 1, 'Os Joins no MySQL', 1)  
	- ('Lucas', 'aa@aa.com', 1, 'Os posts', 2)  
	- ('Lisa, 'bb@bb.com', 2, 'Os Joins no MySQL', 1)  
	- ('Lisa, 'bb@bb.com', 2, 'Os posts', 2)  

### Inner join

O inner join combina uma linha da tabela A com uma linha da tabela B se estas linhas satisfazerem uma condição chamada **join predicate**. Em outras palavras, ele relaciona uma linha da tabela A com uma linha da tabela B com base numa coluna em comum.

Exemplo:

Tabela Usuário - (nome, email, id)  
	- ('Lucas', 'aa@aa.com', 1)  
	- ('Lisa', 'bb@bb.com', 2)  

Tabela Post - (titulo, author_id):  
	- ('Os Joins no MySQL', 1)  
	- ('Os posts', 2)  

Usuário `INNER JOIN` Post *QUANDO* Usuário.id = Post.author_id (nome, email, id, titulo, author_id):  
	- ('Lucas', 'aa@aa.com', 1, 'Os joins no MySQL', 1)  
	- ('Lisa', 'bb@bb.com', 2, 'Os posts', 2)  

# Conclusão

Os joins nos permitem obter informações de uma linha de uma tabela B relacionada com uma linha de uma tabela A.