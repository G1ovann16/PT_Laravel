### Sobre el Proyecto 🚀
_En este pequeño proyecto contiene un CRUD de usuarios donde es necesario registrarse para que se pueda almacenar sus datos en al base de datos. Posterior a este paso el administrador le otorgará un rol en dependencia del proposito de su incorporación._
  

  ### FRONTEND
Consta de diferentes vistas donde se puede observar un registro, un login  la pagina hoem donde se harán los cambios necesarios.


### BACKEND
Contine los modelos, servicios y controladores necesarios para conectar con el frontend y accesos a la base de datos

### Instalación 🔧 

```
###backend
composer create-project laravel/laravel TestLaravel
**comandos más usados si realiza alguna modificación que quiera agreagar**
php artisan migrate:fresh --seed
php artisan passport:install
php artisan serve
 
###frontend 
npm i 
composer require laravel/ui 
php artisan ui react
sudo npm run watch-poll

*De esta manera vinculas frontend (react) con backend (php)

Otras Instalaciones o paquetes que se irán agreagando

Creando los controladores

php artisan make:controller UserController

### Instalando _react-router-dom_

npm install react-router-dom

### Creando las migraciones

php artisan make:migration create_role_table
php artisan make:migration create_users_table

php artisan migrate
 php artisan migrate:fresh --seed
 
###Para la creacion de modelos

php artisan make:model Users
php artisan make:model Role

###Para la creacion de modelos
php artisan make:controller API/UserController

###Para la creacion de login/register con al dependencia fortify
composer require laravel/fortify
php artisan vendor:publish --provider="Laravel\Fortify\FortifyServiceProvider"
```

## Desarrollado con 🛠️


* [LARAVEL] - _El marco de Laravel tiene algunos requisitos de sistema. Todos estos requisitos los satisface la máquina virtual de Laravel Homestead, por lo que se recomienda encarecidamente que utilice Homestead como su entorno de desarrollo local de Laravel._
<p align="center"><img src="https://res.cloudinary.com/dtfbvvkyp/image/upload/v1566331377/laravel-logolockup-cmyk-red.svg" width="400"></p>

<p align="center">
<a href="https://travis-ci.org/laravel/framework"><img src="https://travis-ci.org/laravel/framework.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://poser.pugx.org/laravel/framework/d/total.svg" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://poser.pugx.org/laravel/framework/v/stable.svg" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://poser.pugx.org/laravel/framework/license.svg" alt="License"></a>
</p>

## Sobre Laravel

_Laravel es un marco de aplicación web con una sintaxis elegante y expresiva. Ya hemos sentado las bases, permitiéndole crear sin preocuparse por las pequeñas cosas. Laravel elimina la molestia del desarrollo al facilitar las tareas comunes utilizadas en muchos proyectos web, como_:

- [Motor de enrutamiento simple y rápido](https://laravel.com/docs/routing).
- [Pontente dependencia a la inyeccion de los componentes](https://laravel.com/docs/container).
- Multiples back-ends para [session](https://laravel.com/docs/session) y [cache](https://laravel.com/docs/cache) almacenamiento.
- Expresivo, intuitivo[database ORM](https://laravel.com/docs/eloquent).
- Base de datos agnóstica [schema migrations](https://laravel.com/docs/migrations).
- [Procesamiento robusto de trabajos en segundo plano](https://laravel.com/docs/queues).
- [Transmisión de eventos en tiempo real](https://laravel.com/docs/broadcasting).

### Install Project 🔧    
_Para el uso de este código, es posible que haya creado una interfaz; o una vez descargado o clonado, el repositorio debe crear una base de datos que debe ubicarse. **.env**_

```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=laravel
DB_USERNAME=root
DB_PASSWORD=
   
 ```

 ### CODE
A continuación se agreaga una vía para la confirmacion de registro tras mail
_Accede a:_
**.env**

```
MAIL_MAILER=smtp
MAIL_HOST=smto.gmail.com
MAIL_PORT=587
MAIL_USERNAME=hello@example.com
MAIL_PASSWORD=password
MAIL_ENCRYPTION=tls
MAIL_FROM_ADDRESS=null
MAIL_FROM_NAME="${APP_NAME}"
```
_Accede a:_
**config/mail.php**

_Cambiar host por el declarado en env_
smtp.gmail.com

From cambiamos por el mismo correo de .env y agragamos el nombre de la aplicación. 

_Es necesario un authController donde estará validado el formulario en el cual se enviará el nombre, email y el token de confirmación_

_Crear  plantilla _
```
Mail::send('mails.register', ['data' => $data], function($mail) use($data){
                $mail->subject('text');
                $mail->to($data['email'], $data['name']);
            });
            
            return redirect("auth/register")
            ->with("message", "text1");
```
**text** = _Se notifica que se le enviará un correo_
**text1** = _Se le informa que debe revisar el correo para confirmar_ 
**$data** = _Siendo data la variable que contiene la informacion tras registrarse_

crear una carpeta (la nombro mails) en las vistas (views)
posteriormente se crea una ruta (la cual vien incluida con el token)

por ultimo hacer la llamda en AuthController para confirmar el registro


## Autor ✒️
* **Giovanni Landaburo Del Arco** - *Trabajo Inicial* - [glandaburo](https://github.com/G1ovann16)