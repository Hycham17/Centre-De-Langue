<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\EvenementApiController;

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/evenements', [EvenementApiController::class, 'index']);
Route::get('/evenements/{id}', [EvenementApiController::class, 'show']); 

use App\Http\Controllers\Api\EmailsUserApiController;
use App\Http\Controllers\Api\MessageController;

Route::post('/emails', [EmailsUserApiController::class, 'store']); 

Route::post('/messages', [MessageController::class, 'store']);
