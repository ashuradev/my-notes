# Princípios SOLID - Single Responsability - Responsabilidade única

SOLID são alguns princípios de orientação a objetos, que nos ajudam a escrever um código mais limpo e com mais qualidade.
O primeiro príncipio do SOLID é o príncipio da responsabilidade única.
Este príncipio diz que uma classe/método/função deve ter apenas uma única responsabilidade.

```js
class Software {
    iniciar()
    {
        // lógica aqui...
    }
    instalar()
    {
        // lógica aqui...
    }
    ativarLicenca() 
    {
        // lógica aqui...
    }
}
```

Esta classe não segue este príncipio pois tem várias responsabilidades, checando a licença do software, iniciando ele, checando se ele está instalado.
A solução é separar essas responsabilidades em outras classes como Bootstrapper (inicializador), Installer, LicenseRepository, etc.