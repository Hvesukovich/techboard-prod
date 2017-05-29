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
Route::post('/api/all-goods-ids', 'GoodsController@getAllGoodsIdsJSON');
Route::get('/api/all-goods-ids', 'GoodsController@getAllGoodsIdsJSON');
Route::post('/api/goods-id', 'GoodsController@getGoodsIdJSON');
Route::get('/api/goods-id', 'GoodsController@getGoodsIdJSON');
Route::post('/api/good-id', 'GoodsController@getGoodIdJSON');
Route::post('/api/create-user', 'UsersController@createUser');
Route::post('/api/open-user', 'UsersController@openUser');
Route::get('/api/open-user', 'UsersController@openUser');
Route::post('/api/good-edit', 'GoodsController@editGoodAndGetGoodJSON');
Route::get('/api/good-edit', 'GoodsController@editGoodAndGetGoodJSON');
Route::post('/api/good-del', 'GoodsController@delGoodById');
Route::get('/api/good-del', 'GoodsController@delGoodById');


Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
