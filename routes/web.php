<?php

use App\Http\Controllers\EmailsUserController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\EvenementController;
use App\Http\Controllers\MessageController;
use App\Http\Controllers\DashboardController;

// Redirect root to login
Route::get('/', function () {
    return redirect('/login');
});

// Route::get('/403', function () {
//     return view('403'); // هاد الطريق كترجع للمستخدم صفحة الخطأ 403
// });
//  Bloquer accès à /register totalement
Route::get('/register', function () {
    abort(403, 'Access denied');
});
Route::post('/register', function () {
    abort(403, 'Access denied');
});

//  Dashboard route, accès فقط للإداري (is_admin)
Route::get('/dashboard', [DashboardController::class, 'index'])
    ->middleware(['auth', 'verified', 'is_admin']) // <= ajouté is_admin ici
    ->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::resource('evenements', \App\Http\Controllers\EvenementController::class);
    
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::get('/emails', [EmailsUserController::class, 'index'])->name('emails.index');
    Route::delete('/emails/{id}', [EmailsUserController::class, 'destroy'])->name('emails.destroy');
    Route::resource('messages', MessageController::class);
    Route::post('/emails/send', [EmailsUserController::class, 'sendEmails'])->name('emails.send');
});

require __DIR__.'/auth.php';
