<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class IsAdmin
{
    public function handle(Request $request, Closure $next): Response
    {
        if (auth()->check() && auth()->user()->is_admin) {
            return $next($request);
        }

        // تسجيل الخروج باش ميرجعش يحاول يدخل كل مرة
        auth()->logout();

        // ترجعو لصفحة login مع رسالة خطأ
        return redirect()->route('login')->withErrors([
            'email' => "Vous êtes administrateur, vous n'avez pas la permission de vous connecter.",
        ]);
    }
}
