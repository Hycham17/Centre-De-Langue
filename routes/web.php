<?php

use App\Http\Controllers\EmailsUserController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\EvenementController;
use App\Http\Controllers\MessageController;

// Route::get('/', function () {
//     return view('welcome');
// });
Route::get('/', function () {
    return redirect('/login');
});

Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');
// Route::get('/admin', function () {
//     return view('admin.dashboard');
// })->middleware(['auth'])->name('admin.dashboard');


Route::middleware('auth')->group(function () {
    Route::resource('evenements', \App\Http\Controllers\EvenementController::class);
    
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});


Route::get('/emails', [EmailsUserController::class, 'index'])->name('emails.index');
Route::delete('/emails/{id}', [EmailsUserController::class, 'destroy'])->name('emails.destroy');



Route::resource('messages', MessageController::class);
require __DIR__.'/auth.php';
