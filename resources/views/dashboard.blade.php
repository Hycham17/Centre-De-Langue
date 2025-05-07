<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-2xl text-white leading-tight animate-slide-up">
            {{ __('Tableau de bord') }}
        </h2>
    </x-slot>

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white/95 dark:bg-gray-800/95 overflow-hidden shadow-xl sm:rounded-2xl animate-slide-up">
                <div class="p-6 text-gray-900 dark:text-gray-100">
                    <h3 class="text-3xl font-extrabold mb-8 text-blue-600 animate-slide-up">{{ __("Bienvenue dans votre espace admin") }}</h3>
                    <!-- إضافة الإحصائيات هنا -->
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <!-- عدد الـ Emails -->
                        <div class="bg-gradient-to-r from-blue-500 to-indigo-600 p-6 rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl text-white card-hover">
                            <h4 class="text-lg font-semibold tracking-wide">{{ __('Nombre des Emails') }}</h4>
                            <p class="text-4xl font-bold mt-3 tracking-tight">{{ $emailsUserCount }}</p>
                        </div>

                        <!-- عدد الـ événements -->
                        <div class="bg-gradient-to-r from-green-500 to-teal-600 p-6 rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl text-white card-hover">
                            <h4 class="text-lg font-semibold tracking-wide">{{ __('Nombre des Événements') }}</h4>
                            <p class="text-4xl font-bold mt-3 tracking-tight">{{ $evenementCount }}</p>
                        </div>

                        <!-- عدد الـ messages -->
                        <div class="bg-gradient-to-r from-red-500 to-pink-600 p-6 rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl text-white card-hover">
                            <h4 class="text-lg font-semibold tracking-wide">{{ __('Nombre des Messages') }}</h4>
                            <p class="text-4xl font-bold mt-3 tracking-tight">{{ $messageCount }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <style>
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');
        body {
            font-family: 'Poppins', sans-serif;
            background: linear-gradient(to bottom right, #2563eb, #f97316);
        }
        .animate-slide-up {
            animation: slideUp 0.8s ease-out forwards;
        }
        @keyframes slideUp {
            0% { transform: translateY(30px); opacity: 0; }
            100% { transform: translateY(0); opacity: 1; }
        }
        .card-hover {
            transition: all 0.4s ease;
        }
        .card-hover:hover {
            transform: translateY(-8px);
            box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3);
        }
    </style>
</x-app-layout>