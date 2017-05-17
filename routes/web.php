<?php

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

Route::post('/api/categories', 'CategoriesController@getAllCategoriesJSON');
Route::get('/api/categories', 'CategoriesController@getAllCategoriesJSON');
Route::post('/api/goods', 'GoodsController@getGoodsByCategoriesIdJSON');
Route::get('/api/goods', 'GoodsController@getGoodsByCategoriesIdJSON');

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
