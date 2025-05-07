<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Connexion - Centre de Langues et de Communication</title>

    @vite(['resources/css/app.css', 'resources/js/app.js'])
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');
        body {
            font-family: 'Poppins', sans-serif;
        }
        .animate-slide-up {
            animation: slideUp 0.8s ease-out forwards;
        }
        .animate-fade-in {
            animation: fadeIn 1s ease-in forwards;
        }
        @keyframes slideUp {
            0% { transform: translateY(50px); opacity: 0; }
            100% { transform: translateY(0); opacity: 1; }
        }
        @keyframes fadeIn {
            0% { opacity: 0; }
            100% { opacity: 1; }
        }
        .input-focus {
            transition: all 0.3s ease;
        }
        .input-focus:focus {
            transform: scale(1.02);
            box-shadow: 0 0 0 4px rgba(249, 115, 22, 0.2);
        }
        .link-hover {
            position: relative;
            transition: color 0.3s ease;
        }
        .link-hover:hover {
            color: #f97316;
        }
        .link-hover::after {
            content: '';
            position: absolute;
            width: 0;
            height: 2px;
            bottom: -2px;
            left: 0;
            background-color: #f97316;
            transition: width 0.3s ease;
        }
        .link-hover:hover::after {
            width: 100%;
        }
        .button-hover {
            transition: all 0.3s ease;
        }
        .button-hover:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }
    </style>
</head>
<body class="min-h-screen bg-gradient-to-br from-blue-600 via-blue-500 to-orange-600 flex flex-col items-center justify-center relative">
    <!-- Logo en haut à gauche -->
    <div class="absolute top-6 left-6 animate-fade-in">
        <img src="{{ asset('assets/logo3.png') }}" alt="Logo Centre de Langues et de Communication" class="h-24 w-24">
    </div>

    <!-- Conteneur principal -->
    <div class="flex flex-col items-center">
        <!-- Nom du site centré avec style moderne -->
        <div class="mb-10 bg-gradient-to-r from-blue-500 to-orange-500 text-transparent bg-clip-text animate-slide-up">
        <h1 class="text-4xl font-light text-white border-b-2 border-indigo-300 pb-2">
    Centre de Langues et de Communication
</h1>        </div>

        <!-- Formulaire -->
        <div class="w-full max-w-sm p-6 bg-white/95 rounded-2xl shadow-xl animate-slide-up transition-all duration-300 hover:shadow-2xl">
            <!-- Session Status -->
            <x-auth-session-status class="mb-4 text-center text-gray-600 font-medium text-sm" :status="session('status')" />
            @if ($errors->has('email'))
    <div class="mb-4 px-4 py-3 rounded-lg bg-red-100 text-red-700 text-sm shadow-sm border border-red-300 animate-fade-in">
        {{ $errors->first('email') }}
    </div>
@endif
            <form method="POST" action="{{ route('login') }}">
                @csrf

                <!-- Adresse e-mail -->
                <div>
                    <x-input-label for="email" :value="__('Adresse e-mail')" class="text-gray-700 font-semibold text-sm" />
                    <x-text-input id="email" class="block mt-2 w-full rounded-xl border-gray-200 shadow-sm focus:ring-0 focus:border-orange-400 input-focus bg-gray-50 text-gray-800 placeholder-gray-400 text-sm py-3 px-4" type="email" name="email" :value="old('email')" required autofocus autocomplete="username" placeholder="exemple@domaine.com" />
                    <x-input-error :messages="$errors->get('email')" class="mt-1 text-red-500 text-xs" />
                </div>

                <!-- Mot de passe -->
                <div class="mt-4">
                    <x-input-label for="password" :value="__('Mot de passe')" class="text-gray-700 font-semibold text-sm" />
                    <x-text-input id="password" class="block mt-2 w-full rounded-xl border-gray-200 shadow-sm focus:ring-0 focus:border-orange-400 input-focus bg-gray-50 text-gray-800 placeholder-gray-400 text-sm py-3 px-4" type="password" name="password" required autocomplete="current-password" placeholder="••••••••" />
                    <x-input-error :messages="$errors->get('password')" class="mt-1 text-red-500 text-xs" />
                </div>

                <!-- Se souvenir de moi -->
                <div class="block mt-4">
                    <label for="remember_me" class="inline-flex items-center">
                        <input id="remember_me" type="checkbox" class="rounded border-gray-300 text-orange-500 shadow-sm focus:ring-orange-400 h-4 w-4" name="remember">
                        <span class="ms-2 text-xs text-gray-600">{{ __('Se souvenir de moi') }}</span>
                    </label>
                </div>

                <div class="flex items-center justify-between mt-4">
                    @if (Route::has('password.request'))
                        <a class="link-hover text-xs text-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-400" href="{{ route('password.request') }}">
                            {{ __('Mot de passe oublié ?') }}
                        </a>
                    @endif

                    <x-primary-button class="button-hover bg-orange-500 hover:bg-orange-600 rounded-full px-6 py-2 text-white font-semibold text-sm shadow-md">
                        {{ __('Se connecter') }}
                    </x-primary-button>
                </div>
            </form>
        </div>
    </div>
</body>
</html>