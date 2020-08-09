# Tipos

- Boolean
- Number
    - **Todos** são ponto flutuante *ou* BigInteger.
- String
    - Template strings
        - Pode conter expresões e várias linhas.
- Array
    - Um conjunto de elementos identificados por um índice.
    - Você pode especificar o tipo Array em uma variável de dois modos:
        - Informando o tipo seguido por colchetes: ```ts
            let meuArray: number[] = [1, 2, 3];
        ```
        - Utilizando *generics*: ```ts
            let meuArray: Array<number> = [1, 2, 3];
        ```
- Tuplas
    - Um tipo que representa um array com um número de elementos **fixo** e com tipos conhecidos: ```ts
        let meuArray: [number, string] = [10, "Olá"];
    ```
- Enum
    - Nos permite dá nomes mais amigáveis a um conjunto de valores (números, strings, etc).
    - ```ts
        enum MemberType {
            ADMIN,
            MOD,
            NORMAL
        }
        // Acessando:
        MemberType.ADMIN;
    ```
    - Você pode alterar o valor dos membros: ```ts
        enum MemberType {
            ADMIN = 1,
            MOD, // Agora é 2
            NORMAL // Agora é 3
        }
    ```

    - Acessando os nomes dos membros pelo seu valor: ```ts
        enum MemberType {
            ADMIN = 1,
            MOD, // Agora é 2
            NORMAL // Agora é 3
        }
        MemberType[1]; // --> 'Mod'
    ```
- Unknown
    - Representa um valor com um tipo desconhecido (que pode ser strings, booleans, numbers, etc).

- Any
    - Representa qualquer valor
    - Exclui a verificação de tipo
    - ```ts
        let variavel: any = 10;

        variavel.toFixed(); // ????????????????????
    ```

- Void
    - Representa o nada
    - Não há nenhum tipo

- Never
    - Representa um valor que nunca ocorre.

## Asserção de tipo

- Especifica o tipo de um valor.
- Difere do *type casting* convencional pois não executa nenhuma reestruturação dos dados ou verificação dos dados, além de ser utilizado **somente** pelo compilador.
- Utiliza quando você sabe mais do tipo de um valor que o próprio compilador.

- Sintaxes:
    ```ts
        let k: any = 'test';
        let l: number = (k as string).length;

        // Ou utilizando a sintaxe angle-bracket:
        let k: any = 'test';
        let l: number = (<string>k).length;
    ```
