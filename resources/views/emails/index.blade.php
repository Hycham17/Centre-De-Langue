<x-app-layout>
    <x-slot name="header">
        <h2 class="text-2xl font-bold text-gray-800 dark:text-white">Gestion des abonnés à la Newsletter</h2>
    </x-slot>

    <div class="p-6 space-y-8">

        @if (session('success'))
            <div class="bg-green-100 text-green-700 border border-green-400 p-4 rounded">
                {{ session('success') }}
            </div>
        @endif

        {{-- Formulaire d'envoi d'email --}}
        <div class="bg-white dark:bg-gray-800 p-6 rounded shadow">
            <h3 class="text-lg font-semibold mb-4 text-gray-700 dark:text-white">Envoyer un email</h3>

            <form method="POST" action="{{ route('emails.send') }}">
                @csrf
                <div class="mb-4">
                    <label class="block text-sm text-gray-600 dark:text-gray-300 mb-1">Sujet</label>
                    <input type="text" name="subject" class="w-full p-2 border rounded focus:ring focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:text-white" required>
                </div>

                <div class="mb-4">
                    <label class="block text-sm text-gray-600 dark:text-gray-300 mb-1">Message</label>
                    <textarea name="message" rows="4" class="w-full p-2 border rounded focus:ring focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:text-white" required></textarea>
                </div>

                <div class="mb-4">
                    <label class="block text-sm text-gray-600 dark:text-gray-300 mb-2">Choisissez les abonnés :</label>
                    
                    <!-- Checkbox principal -->
                    <label class="flex items-center space-x-2 mb-2 text-sm font-semibold text-blue-700 dark:text-blue-300">
                        <input type="checkbox" id="selectAll" class="rounded">
                        <span>Tout sélectionner </span>
                    </label>

                    <div class="grid md:grid-cols-2 gap-2 max-h-40 overflow-y-auto border p-2 rounded dark:border-gray-700 bg-gray-50 dark:bg-gray-700">
                        @foreach ($emails as $email)
                            <label class="flex items-center space-x-2 text-sm text-gray-700 dark:text-gray-300">
                                <input type="checkbox" name="emails[]" value="{{ $email->email }}" class="rounded email-checkbox">
                                <span>{{ $email->email }}</span>
                            </label>
                        @endforeach
                    </div>
                </div>

                <button type="submit" class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded shadow">
                    Envoyer l'email
                </button>

                <!-- Lien vers événements -->
               
            </form>
        </div>

        {{-- Table des abonnés --}}
        <div class="bg-white dark:bg-gray-800 p-6 rounded shadow">
            <h3 class="text-lg font-semibold mb-4 text-gray-700 dark:text-white">Liste des abonnés</h3>

            <table class="min-w-full text-sm text-left text-gray-700 dark:text-gray-300">
                <thead class="bg-gray-100 dark:bg-gray-700">
                    <tr>
                        <th class="p-3">Id</th>
                        <th class="p-3">Email</th>
                        <th class="p-3">Action</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
                    @foreach ($emails as $index => $email)
                        <tr>
                            <td class="p-3">{{ $index + 1 }}</td>
                            <td class="p-3">{{ $email->email }}</td>
                            <td class="p-3">
                                <form method="POST" action="{{ route('emails.destroy', $email->id) }}">
                                    @csrf
                                    @method('DELETE')
                                    <button onclick="return confirm('Confirmer la suppression ?')" class="text-red-600 hover:text-red-800 font-medium">
                                        Supprimer
                                    </button>
                                </form>
                            </td>
                        </tr>
                    @endforeach
                </tbody>
            </table>
            <div class="mt-4">
    {{ $emails->links() }}
</div>
        </div>

    </div>

    <!-- Script JS pour le selectAll -->
    <script>
        document.addEventListener('DOMContentLoaded', function () {
            const selectAllCheckbox = document.getElementById('selectAll');
            const emailCheckboxes = document.querySelectorAll('.email-checkbox');

            selectAllCheckbox.addEventListener('change', function () {
                emailCheckboxes.forEach(cb => cb.checked = this.checked);
            });
        });
    </script>
</x-app-layout>
