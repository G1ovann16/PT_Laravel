<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});
Route::get('/home', function () {
    return view('users');
});

// Route::get('/users', 'App\Http\Controllers\UsersController@index');
// Route::get('/users/index', 'App\Http\Controllers\UsersController@index');
// Route::get('/users/list', 'App\Http\Controllers\UsersController@index');
// Route::get('/users/form', 'App\Http\Controllers\UsersController@index');
// Route::get('/users/edit/{num}', 'App\Http\Controllers\UsersController@index');
