# Introdução

- Testar é o processo de garantiar que o nosso programa produza *outputs* e *side-effects* corretos para *inputs*.

- *Afirmamos* o que nosso código deve fazer em *especificações*.

- Teste automatizado é um código que testa um outro código.

- Teste de unidade testa os menores pedaços de código, ou unidades. As unidades nós que definimos, mas normalmente é uma parte pequena programa que pode funcionar isoladamente. Aqui nós testa nossas unidades sem recursos externos como um banco de dados. Aqui nós testa uma coisa somente ao mesmo tempo. Testam funcionalides especificias.

- Testes de unidade devem no mínimo cobrir a maior parte das situações de uma unidade.

- Testes de integração testam o comportamento da interação entre componentes de um sistema. Testam funcionalidades completas, como rotas até um controller, passando por várias camadas e arquivos da aplicação.

- No TDD a lógica de teste *precede* a lógica do programa.

- Teste de integração testa internamente várias funções. Ele deve testar a interação entre duas ou mais unidades.

- Mocking é o ato de falsificar algum elemento externo à aplicação, como se nunca falhasse. Por ex., modificar uma função que retorna dados do DB para que sempre retorne um valor constante, para que nós não acessamos o banco de dados em si.

## Jest

- O primeiro parâmetro da função test é o título ou descrição e o segundo parâmetro é uma função em que afirmamos algo.

- O describe nos permite dividir os testes em seções.   