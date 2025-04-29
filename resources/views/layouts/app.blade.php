<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

    <!-- Scripts -->
    @vite(['resources/css/app.css', 'resources/js/app.js'])
    <script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"></script>
</head>
<body class="font-sans antialiased">
    @if (
        Str::startsWith(request()->path(), 'dashboard') ||
        Str::startsWith(request()->path(), 'evenements') ||
        Str::startsWith(request()->path(), 'formulaire') ||
        Str::startsWith(request()->path(), 'newsletter')
    )
        <div class="flex min-h-screen bg-gray-100 dark:bg-gray-900">
            <!-- Sidebar -->
            <aside class="w-64 bg-white dark:bg-gray-800 shadow-md">
                <div class="p-4 border-b border-gray-200 dark:border-gray-700">
                    <div class="flex items-center space-x-2">
                        <img src="{{ Vite::asset('frontend/src/assets/Logo/logo2.png') }}" alt="Logo" class="h-10 w-auto">
                    </div>
                </div>

                <nav class="mt-4">
                    <a href="{{ route('dashboard') }}" class="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700">Tableau de bord</a>
                    <a href="{{ route('evenements.index') }}" class="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700">Événements & actualités</a>
                    <a href="#" class="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700">Formulaire de contact</a>
                    <a href="#" class="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700">Newsletter</a>
                </nav>
            </aside>

            <!-- Main Content -->
            <div class="flex-1 flex flex-col">
                <header class="bg-white dark:bg-gray-800 px-6 py-4 shadow flex justify-between items-center">
                    <h1 class="text-lg font-semibold text-gray-800 dark:text-gray-200">Centre de langue</h1>

                    <div class="relative" x-data="{ open: false }">
                        <button @click="open = !open" class="text-gray-700 dark:text-gray-300 font-semibold focus:outline-none">
                            {{ Auth::user()->name }}
                        </button>
                        <div x-show="open" @click.outside="open = false" class="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-700 rounded shadow z-50">
                            <a href="{{ route('profile.edit') }}" class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600">Profil</a>
                            <form method="POST" action="{{ route('logout') }}">
                                @csrf
                                <button type="submit" class="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600">
                                    Déconnexion
                                </button>
                            </form>
                        </div>
                    </div>
                </header>

                <main class="p-6">
                    {{ $slot }}
                </main>
            </div>
        </div>
    @else
        <!-- Layout normal pour les autres pages -->
        <div class="min-h-screen bg-gray-100 dark:bg-gray-900">
            @include('layouts.navigation')

            @isset($header)
                <header class="bg-white dark:bg-gray-800 shadow">
                    <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                        {{ $header }}
                    </div>
                </header>
            @endisset

            <main>
                {{ $slot }}
            </main>
        </div>
    @endif
</body>
</html>
