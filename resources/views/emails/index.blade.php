<x-app-layout>
    <x-slot name="header">
        <h2 class="text-xl font-semibold text-gray-800 dark:text-gray-200">Liste des Emails</h2>
    </x-slot>

    <div class="p-6">

        @if (session('success'))
            <div class="bg-green-100 text-green-700 p-3 rounded mb-4">{{ session('success') }}</div>
        @endif

        <table class="w-full bg-white dark:bg-gray-800 rounded shadow">
            <thead>
                <tr>
                    <th class="p-3 text-left">#</th>
                    <th class="p-3 text-left">Email</th>
                    <th class="p-3 text-left">Actions</th>
                </tr>
            </thead>
            <tbody>
                @foreach ($emails as $index => $email)
                    <tr class="border-t border-gray-200 dark:border-gray-700">
                        <td class="p-3">{{ $index + 1 }}</td>
                        <td class="p-3">{{ $email->email }}</td>
                        <td class="p-3">
                            <form method="POST" action="{{ route('emails.destroy', $email->id) }}">
                                @csrf
                                @method('DELETE')
                                <button onclick="return confirm('Confirmer la suppression ?')" class="text-red-500">
                                    Supprimer
                                </button>
                            </form>
                        </td>
                    </tr>
                @endforeach
            </tbody>
        </table>
    </div>
</x-app-layout>
