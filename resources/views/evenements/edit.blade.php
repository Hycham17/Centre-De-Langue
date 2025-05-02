<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
            Modifier l'événement
        </h2>
    </x-slot>

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white dark:bg-gray-800 shadow-sm sm:rounded-lg p-6">
                <form action="{{ route('evenements.update', $evenement) }}" method="POST" enctype="multipart/form-data">
                    @csrf
                    @method('PUT')

                    @foreach (['fr', 'en', 'ar'] as $lang)
                        <div class="mt-4">
                            <label class="block text-sm font-medium text-gray-700">Titre ({{ strtoupper($lang) }})</label>
                            <input type="text" name="title_{{ $lang }}" value="{{ old('title_'.$lang, $evenement->{'title_'.$lang}) }}" class="mt-1 block w-full rounded-md shadow-sm" required>
                        </div>

                        <div class="mt-4">
                            <label class="block text-sm font-medium text-gray-700">Description ({{ strtoupper($lang) }})</label>
                            <textarea name="description_{{ $lang }}" rows="4" class="mt-1 block w-full rounded-md shadow-sm" required>{{ old('description_'.$lang, $evenement->{'description_'.$lang}) }}</textarea>
                        </div>
                    @endforeach

                    <div class="mt-4">
                        <label class="block text-sm font-medium text-gray-700">Ajouter de nouvelles images (optionnel)</label>
                        <input type="file" name="images[]" accept="image/*" multiple>
                    </div>

                    <div class="mt-4">
                        <label class="block text-sm font-medium text-gray-700">Date</label>
                        <input type="date" name="date" value="{{ old('date', $evenement->date) }}" required>
                    </div>

                    <div class="mt-6">
                        <button type="submit" class="bg-green-600 text-white px-4 py-2 rounded">Mettre à jour</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</x-app-layout>
