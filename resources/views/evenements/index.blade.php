<x-app-layout>
    <x-slot name="header">
        <h2 class="text-xl font-semibold text-gray-800 dark:text-gray-200">Liste des événements</h2>
    </x-slot>

    <div class="p-6">
        <a href="{{ route('evenements.create') }}" class="bg-blue-500 text-white px-4 py-2 rounded mb-4 inline-block">Ajouter un événement</a>

        @if (session('success'))
            <div class="bg-green-100 text-green-700 p-3 rounded mb-4">{{ session('success') }}</div>
        @endif

        <table class="w-full bg-white dark:bg-gray-800 rounded shadow">
            <thead>
                <tr>
                    <th class="p-3 text-left">Titre FR</th>
                    <th class="p-3">Date</th>
                    <th class="p-3">Actions</th>
                </tr>
            </thead>
            <tbody>
                @foreach ($evenements as $event)
                    <tr class="border-t border-gray-200 dark:border-gray-700">
                        <td class="p-3">{{ $event->title_fr }}</td>
                        <td class="p-3">{{ $event->date }}</td>
                        <td class="p-3 flex space-x-2">
                            <a href="{{ route('evenements.show', $event) }}" class="text-green-600">Afficher</a>
                            <a href="{{ route('evenements.edit', $event) }}" class="text-blue-500">Modifier</a>
                            <form method="POST" action="{{ route('evenements.destroy', $event) }}">
                                @csrf
                                @method('DELETE')
                                <button onclick="return confirm('Confirmer la suppression ?')" class="text-red-500">Supprimer</button>
                            </form>
                        </td>
                    </tr>
                @endforeach
            </tbody>
        </table>
    </div>
</x-app-layout>
