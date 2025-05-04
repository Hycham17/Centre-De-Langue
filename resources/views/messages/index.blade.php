<x-app-layout>
    <x-slot name="header">
        <h2 class="text-xl font-semibold text-gray-800 dark:text-gray-200">Liste des événements</h2>
    </x-slot>

    <div class="p-6">
        @if (session('success'))
            <div class="bg-green-100 text-green-700 p-3 rounded mb-4">{{ session('success') }}</div>
        @endif

        <table class="w-full bg-white dark:bg-gray-800 rounded shadow">
            <thead>
                <tr>
                    <th class="p-3">#</th>
                    <th class="p-3">Nom Complet</th>
                    <th class="p-3">Téléphone</th>
                    <th class="p-3">Email</th>
                    <th class="p-3">date</th>
                    <th class="p-3">Actions</th>
                </tr>
            </thead>
            <tbody>
                @foreach ($messages as $index => $message)
                    <tr class="border-t border-gray-200 dark:border-gray-700">
                        <td class="p-3">{{ $index + 1 }}</td>
                        <td class="p-3">{{ $message->fullName }}</td>
                        <td class="p-3">{{ $message->phone }}</td>
                        <td class="p-3">{{ $message->email }}</td>
                        <td class="p-3">{{ $message->created_at }}</td>
                        <td class="p-3 flex space-x-2">
                            <a href="{{ route('messages.show', $message->id) }}" class="text-blue-500">Afficher</a>
                            <form method="POST" action="{{ route('messages.destroy', $message->id) }}">
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
