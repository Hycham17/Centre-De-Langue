<x-app-layout>
    <x-slot name="header">
        <h2 class="text-2xl font-semibold text-white leading-tight animate-slide-up">
            {{ __('Liste des événements') }}
        </h2>
    </x-slot>

    <div class="p-6">
        @if (session('success'))
            <div class="bg-green-100/90 text-green-700 p-3 rounded-lg shadow-md animate-slide-up mb-4">
                {{ session('success') }}
            </div>
        @endif

        <table class="w-full bg-white/95 dark:bg-gray-800/95 rounded-xl shadow-lg">
            <thead>
                <tr class="bg-blue-600/10">
                    <th class="p-3 text-left text-gray-700 dark:text-gray-300 font-semibold text-sm">Id</th>
                    <th class="p-3 text-left text-gray-700 dark:text-gray-300 font-semibold text-sm">Nom Complet</th>
                    <th class="p-3 text-left text-gray-700 dark:text-gray-300 font-semibold text-sm">Téléphone</th>
                    <th class="p-3 text-left text-gray-700 dark:text-gray-300 font-semibold text-sm">Email</th>
                    <th class="p-3 text-left text-gray-700 dark:text-gray-300 font-semibold text-sm">Date</th>
                    <th class="p-3 text-left text-gray-700 dark:text-gray-300 font-semibold text-sm">Actions</th>
                </tr>
            </thead>
            <tbody>
                @foreach ($messages as $index => $message)
                    <tr class="border-t border-gray-200 dark:border-gray-700 hover:bg-gray-50/50 dark:hover:bg-gray-700/50 transition-all duration-200 animate-slide-up">
                        <td class="p-3 text-sm">{{ $index + 1 }}</td>
                        <td class="p-3 text-sm">{{ $message->fullName }}</td>
                        <td class="p-3 text-sm">{{ $message->phone }}</td>
                        <td class="p-3 text-sm">{{ $message->email }}</td>
                        <td class="p-3 text-sm">{{ $message->created_at }}</td>
                        <td class="p-3 flex space-x-2 text-sm">
                            <a href="{{ route('messages.show', $message->id) }}" class="text-blue-500 hover:text-blue-600 transition-colors duration-200">Afficher</a>
                            <form method="POST" action="{{ route('messages.destroy', $message->id) }}">
                                @csrf
                                @method('DELETE')
                                <button onclick="return confirm('Confirmer la suppression ?')" class="text-red-500 hover:text-red-600 transition-colors duration-200">Supprimer</button>
                            </form>
                        </td>
                    </tr>
                @endforeach
            </tbody>
        </table>
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