<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TodoListController;


Route::get('/', function () {
    return view('welcome');
});

Route::get('/', [TodoListController::class, 'index'])->name('index');
Route::get('/getItemAllRoute', [TodoListController::class, 'getItemAll'])->name('getItemAll');

Route::post('/saveItemRoute', [TodoListController::class, 'saveItem'])->name('saveItem');
Route::post('/deleteItemRoute/{id}', [TodoListController::class, 'deleteItem'])->name('deleteItem');
Route::post('/updateItemRoute', [TodoListController::class, 'updateItem'])->name('updateItem');
Route::post('/crossItemRoute/{id}', [TodoListController::class, 'crossItem'])->name('crossItem');
Route::put('/completeAllRoute', [TodoListController::class, 'completeAll'])->name('completeAll');
Route::delete('/deleteAllRoute', [TodoListController::class, 'deleteAll'])->name('deleteAll');

