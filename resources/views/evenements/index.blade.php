<x-app-layout>
    <x-slot name="header">
        <h2 class="text-2xl font-semibold text-white leading-tight animate-slide-up">
            {{ __('Liste des événements') }}
        </h2>
    </x-slot>

    <div class="p-6">
        <a href="{{ route('evenements.create') }}" class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md transition-all duration-200 animate-slide-up mb-4 inline-block">
            Ajouter un événement
        </a>

        @if (session('success'))
            <div class="bg-green-100/90 text-green-700 p-3 rounded-lg shadow-md animate-slide-up mb-4">
                {{ session('success') }}
            </div>
        @endif

        <table class="w-full bg-white/95 dark:bg-gray-800/95 rounded-xl shadow-lg">
            <thead>
                <tr class="bg-blue-600/10">
                    <th class="p-3 text-left text-gray-700 dark:text-gray-300 font-semibold text-sm">Titre FR</th>
                    <th class="p-3 text-left text-gray-700 dark:text-gray-300 font-semibold text-sm">Date</th>
                    <th class="p-3 text-left text-gray-700 dark:text-gray-300 font-semibold text-sm">Actions</th>
                </tr>
            </thead>
            <tbody>
                @foreach ($evenements as $event)
                    <tr class="border-t border-gray-200 dark:border-gray-700 hover:bg-gray-50/50 dark:hover:bg-gray-700/50 transition-all duration-200 animate-slide-up">
                        <td class="p-3 text-sm">{{ $event->title_fr }}</td>
                        <td class="p-3 text-sm">{{ $event->date }}</td>
                        <td class="p-3 flex space-x-2 text-sm">
                            <a href="{{ route('evenements.show', $event) }}" class="text-green-600 hover:text-green-700 transition-colors duration-200">Afficher</a>
                            <a href="{{ route('evenements.edit', $event) }}" class="text-blue-500 hover:text-blue-600 transition-colors duration-200">Modifier</a>
                            <form method="POST" action="{{ route('evenements.destroy', $event) }}">
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
        .animate-slide-up {
            animation: slideUp 0.8s ease-out forwards;
        }
        @keyframes slideUp {
            0% { transform: translateY(30px); opacity: 0; }
            100% { transform: translateY(0); opacity: 1; }
        }
    </style>
</x-app-layout>