# Group by

- É utilizado parar separar as linhas de uma tabela em grupos, e então podemos agregar/obter dados para cada grupo. Apenas uma linha *única* que representa todo o grupo é retornada,.

- A cláusula `GROUP BY` é utilizada para formar grupos de registros que contém os mesmos valores das colunas especificadas na cláusula, em outras palavras, ele é utilizado para dividir as linhas de sua tabela em grupos que contém semelhança entre as colunas especificas na cláusula. Ele é utilizado comumente para obter resultados resumidos de uma tabela, por exemplo, contar quantas vendas há em um determinado país em uma tabela `vendas`. 

# Having

- É utilizada para filtrar grupos depois do agrupamento, funciona como o `WHERE`, ele decide quais linhas forma cada grupo.

- Se você não utilizar uma função agregada no `HAVING`, ele vai funcionar como o `WHERE`, então é provável que você devia estar utilizando o `WHERE`.

- A cláusula `HAVING` é utilizado juntamente ao `GROUP BY` para filtrar os grupos retornados pelo `GROUP BY`, é utilizado para decidir quais linhas formam cada grupo.
