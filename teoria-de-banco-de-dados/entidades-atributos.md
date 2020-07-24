# Entidades

- Representa algo de importância e é genérico

# Instâncias de entidades

- Uma ocorrência de entidade.

# Atributos

- Descrevem características da entidade.

## Tipos de atributos

### Simples

- Atômico

Ex: CPF, CNPJ

### Composto

- Formado por atributos atômicos

Ex: Endereço de uma empresa com os atributos CEP, Rua, Bairro.

### Multivalorado

- Pode ter múltiplos valores para um mesmo registro.

Ex: Telefone de uma empresa (representado com \* no atributo multivalorado).

### Determinante

- Define de forma única as instâncias de uma entidade.
- Não pode ter mais de um mesmo valor para este atributo.

Ex: CPF (representado com sublinhado no diagrama entidade relacionamento)

### Identificador ("chaves")

- Uma chave é utilizada para identificar cada registro de um BD.
- Pode ser única e pode ser não única.
- Pode ser não única para agrupar registros em categorias, ex: chave estrangeira.
- Pode ser compostas por mais de um atributo.
