<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/users/role', 'App\Http\Controllers\API\UserController@list_role');
Route::post('/users/create', 'App\Http\Controllers\API\UserController@create');
Route::get('/users/list', 'App\Http\Controllers\API\UserController@list');
Route::get('/User/get/{id}', 'App\Http\Controllers\API\UserController@get');