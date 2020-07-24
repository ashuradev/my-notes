# Chave

Uma chave é um ou mais atributo que servem para identificar exclusivamente uma ocorrência de uma entidade ou várias ocorrências.

Podem ser:

- Únicos: Não pode haver repetições.
- Não únicos: Pode haver repetições, pode identificar um conjunto de ocorrências de entidade com este mesmo atributo.

## Chave candidata

- É uma chave que no momento da modelagem de dados tem o potencial de virar uma chave primária.

- Quando esta chave não é escolhida, ela passa a ser uma chave alternativa, isto é, passa a ser uma chave alternativa, **`oras bolas`**.

Ex: CPF.

## Chave primária

- É um atributo único que serve para identificar exclusivamente uma ocorrência de entidade. É a chave principal de uma entidade.

## Chave estrangeira

- É um atributo não-único que armazena uma chave primária de uma ocorrência de uma outra entidade. É utilizado para relacionar entidades.

## Chave composta

- É um atributo que serve para identificar exclusivamente uma ocorrência através da combinação de dois ou mais atributos. 

- Por exemplo, na entidade `Carro` há uma coluna `numero_carro` e `estado_carro`, estes atributos isoladamente não identificam uma ocorrência de `Carro`, mas a sua combinação identifica um `Carro`. Um exemplo disso seria um código `A000` e um estado `SP`, estes atributos sozinhos não identificam o carro, mas a sua combinação **sim**.

## Chave surrogada / substituta

- É uma coluna criada exclusivamente para servir como chave primária, quando não há atributos que podem ser tornar uma chave primária. Normalmente, é um atributo numérico com valores sequenciais chamado `id` (de `identifier` - identificador no inglês).