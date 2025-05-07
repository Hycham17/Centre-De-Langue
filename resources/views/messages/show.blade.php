<x-app-layout>
    <x-slot name="header">
        <h2 class="text-2xl font-semibold text-white leading-tight animate-slide-up">
            {{ __('Détails du message') }}
        </h2>
    </x-slot>

    <div class="p-6">
    <a href="{{ route('messages.index') }}" class="text-blue-500 hover:text-blue-600 transition-colors duration-200 animate-slide-up inline-block mt-4 text-sm font-medium">
                ← Retour à la liste
            </a>
        @if (session('success'))
            <div class="bg-green-100/90 text-green-700 p-3 rounded-lg shadow-md animate-slide-up mb-4">
                {{ session('success') }}
            </div>
        @endif

        <div class="p-6 space-y-6">
            <div class="bg-white/95 dark:bg-gray-800/95 p-4 rounded-xl shadow-md animate-slide-up">
                <div><strong class="text-gray-700 dark:text-gray-300 font-semibold text-sm">Nom Complet:</strong> <span class="text-gray-800 dark:text-gray-200">{{ $message->fullName }}</span></div>
            </div>
            <div class="bg-white/95 dark:bg-gray-800/95 p-4 rounded-xl shadow-md animate-slide-up">
                <div><strong class="text-gray-700 dark:text-gray-300 font-semibold text-sm">Téléphone:</strong> <span class="text-gray-800 dark:text-gray-200">{{ $message->phone }}</span></div>
            </div>
            <div class="bg-white/95 dark:bg-gray-800/95 p-4 rounded-xl shadow-md animate-slide-up">
                <div><strong class="text-gray-700 dark:text-gray-300 font-semibold text-sm">Email:</strong> <span class="text-gray-800 dark:text-gray-200">{{ $message->email }}</span></div>
            </div>
            <div class="bg-white/95 dark:bg-gray-800/95 p-4 rounded-xl shadow-md animate-slide-up">
                <div><strong class="text-gray-700 dark:text-gray-300 font-semibold text-sm">Message:</strong> <span class="text-gray-800 dark:text-gray-200">{{ $message->message }}</span></div>
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
    </style>
</x-app-layout>