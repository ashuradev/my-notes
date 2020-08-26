# Setup

## Pacotes

typescript: Contém o tsc e o tsserver.
ts-node: Roda scripts TypeScript diretamente no Node.

## Configuração

Você pode passar configuração para o TypeScript de dois modos:

- Linha de comando
- Arquivo tsconfig.json

## Arquivo tsconfig.json

- `lib`: Ambiente que você está usando. (exemplo: es2015)
- `module`: O sistema de módulos que você está utilizando (exemplo: commonjs).
- `outDir`: A pasta de saída do seu código.
- `strict`: Ativa isso.
- `esModuleInterop`: Ativa isso quando estiver utilizando CommonJS.
- `target`: Configura a versão do ES que o compilador vai usar para compilar o seu código.
