# Arrays

Um array é uma estrutura que contém uma lista de elementos identificados por chaves.

Um array pode ser:

- Indexado: Onde a chave é um número e já os elementos estão identificados por chaves automaticamente.
- Associativo: Onde a chave pode ser uma string, floats, boolean, null, etc.
- Multidimensional: Array de array.

## Multidimensional

Quando um array há um array. A dimensão de um array é quantidade de arrays, pode exemplo, um de dimensão 2D que contém um array dentro de um outro array, um de 3D que contém um array dentro de um array dentro de um array, etc.

## Manipulando elementos

### Adicionando elementos no início de um array

A função `array_unshift` nos permite adicionar vários elementos no **início** de um array. A ordem dos elementos são preservados, mas os seus indíces/chaves serão modificados para começar a contar a partir do 0:

```php
$array = ['Ashura', 'Lisa'];
array_unshift($array, 'Lucas', 'Diego');

// $array = ['Lucas', 'Diego', 'Ashura', 'Lisa']
```

### Removendo arrays

- `unset`
- O `unset` **PRESERVA** as chaves.
- Pode ser utilizada para também remover variáveis.

### Ordenando

#### sort

- **Ordena** os elementos de um array pelos **seu valores** em **ordem crescente**:
- **Não preserva as chaves.**

```php
$nomes = ['Diego', 'Ashura'];

sort($nomes);

// $nomes = ['Ashura', 'Diego']
```

#### asort

- **Ordena** os elementos de um array pelos **seus valores** em **ordem crescente**:
- **PRESERVA as chaves.**

```php
$nomes = ['a' => 'Diego', 'b' => 'Ashura'];

asort($nomes);

// $nomes = ['b' => 'Ashura', 'a' => 'Diego']
```

#### arsort

- **Ordena** os elementos de um array pelos **seus valores** em **ordem decrescente**:
- **PRESERVA as chaves.**

```php
$nomes = ['a' => 'Ashura', 'b' => 'Diego'];

arsort($nomes);

// $nomes = ['b' => 'Diego', 'a' => 'Ashura']
```

#### ksort

- **Ordena** os elementos de um array pela **sua chave** em **ordem crescente**.
- **PRESERVA os valores das chaves.**

```php
$nomes = ['b' => 'Ashura', 'f' => 'Diego', 'a' => 'Lisa'];

ksort($nomes);

// $nomes = ['a' => 'Lisa', 'b' => 'Ashura', 'f' => 'Diego']
```

#### krsort

- **Ordena** os elementos de um array pela sua **chave** em **ordem decrescente**.
- **PRESERVA os valores das chaves.**

```php
$nomes = ['b' => 'Ashura', 'f' => 'Diego', 'a' => 'Lisa'];

ksort($nomes);

// $nomes = ['f' => 'Diego', 'b' => 'Ashura', 'a' => 'Lisa']
```

### Mesclando arrays

- `array_merge`
- Para arrays indexados, o índice será alterado para que começe a contar do zero.