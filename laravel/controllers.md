# Controllers no Laravel

Você pode definir os callbacks das suas rotas em métodos (actions) de classes (controllers)
Para criar um controller, você deve criar um arquivo PHP com um nome no formato `NomeController` em `app/Http/Controllers` com o namespace App\Http\Controllers, e então criar uma classe neste arquivo que extende App\Http\Controllers\Controller. Cada Controller deverá fazer somente uma coisa, como por exemplo, gerenciar usuários, posts, mostrar dados, etc. Exemplo de Controller em `app/Http/Controllers/HomeController.php`:

```php
namespace App\Http\Controllers;

class HomeController extends Controller 
{
    public function index()
    {
        return 'Esta é a página inicial!';
    }
}
```

E para registrar uma action de um controller em uma rota, basta colocar uma string no callback da rota nesta sintaxe: `NomeDoController@acaoQueDesejaExecutar`.

Exemplo:

```php
// Quando acessar / o método index da classe HomeController
// será executado.
Route::get('/', 'HomeController@index');
```