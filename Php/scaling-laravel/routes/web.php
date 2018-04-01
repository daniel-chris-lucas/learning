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

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Route::post('/job', 'JobsController@startJob');
Route::get('/tasks', 'JobsController@getTasks');
Route::resource('/profile/image', 'ProfileImageController');

Route::get('/headers', function () {
    return view('headers');
});

Laravel\Horizon\Horizon::auth(function ($request) {
    return ($request->user())
        ? $request->user()->email == 'daniel.chris.lucas@gmail.com'
        : false;
});