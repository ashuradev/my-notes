# Componentes no React

Componentes são diferentes pedaços isolados, reutilizáveis e independentes da sua interface. Combinados, os componentes formam toda a sua UI. A medida que um componente cresce, você pode quebrar ele em outros componentes. 
Os componentes possui seus próprios estados e propriedades (props) e então retornam elementos React baseando-se neles. Em outras palavras, os elementos compõem os componentes.
Eles podem ser escritos na forma de functional components (com funções) e class components (com classes).
Exemplo da página da TecMastery no Instagram web (instagram.com/tecmastery) estruturado em componentes:

```jsx
<Cabecalho>
    <Logo />
    <Busca />
    <Botoes>
        <ExplorarBotao />
        <NotificacoesBotao />
        <ContaBotao />
    </Botoes>
</Cabecalho>
<CabecalhoPerfil>
    <Avatar />
    <PerfilInfo />
</CabecalhoPerfil>
<Feed>
    <Post />
    <Post />
    <Post />
</Feed>
```
