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

                    <!-- Titre FR -->
                    <div>
                        <label class="block text-sm font-medium text-gray-700">Titre (FR)</label>
                        <input type="text" name="titre_fr" value="{{ old('titre_fr', $evenement->titre_fr) }}" class="mt-1 block w-full rounded-md shadow-sm" required>
                    </div>

                    <!-- Description FR -->
                    <div class="mt-4">
                        <label class="block text-sm font-medium text-gray-700">Description (FR)</label>
                        <textarea name="description_fr" rows="4" class="mt-1 block w-full rounded-md shadow-sm" required>{{ old('description_fr', $evenement->description_fr) }}</textarea>
                    </div>

                    <!-- Titre EN -->
                    <div class="mt-4">
                        <label class="block text-sm font-medium text-gray-700">Titre (EN)</label>
                        <input type="text" name="titre_en" value="{{ old('titre_en', $evenement->titre_en) }}" class="mt-1 block w-full rounded-md shadow-sm" required>
                    </div>

                    <!-- Description EN -->
                    <div class="mt-4">
                        <label class="block text-sm font-medium text-gray-700">Description (EN)</label>
                        <textarea name="description_en" rows="4" class="mt-1 block w-full rounded-md shadow-sm" required>{{ old('description_en', $evenement->description_en) }}</textarea>
                    </div>

                    <!-- Titre AR -->
                    <div class="mt-4">
                        <label class="block text-sm font-medium text-gray-700">Titre (AR)</label>
                        <input type="text" name="titre_ar" value="{{ old('titre_ar', $evenement->titre_ar) }}" class="mt-1 block w-full rounded-md shadow-sm" required>
                    </div>

                    <!-- Description AR -->
                    <div class="mt-4">
                        <label class="block text-sm font-medium text-gray-700">Description (AR)</label>
                        <textarea name="description_ar" rows="4" class="mt-1 block w-full rounded-md shadow-sm" required>{{ old('description_ar', $evenement->description_ar) }}</textarea>
                    </div>

                    <!-- Date -->
                    <div class="mt-4">
                        <label class="block text-sm font-medium text-gray-700">Date</label>
                        <input type="date" name="date" value="{{ old('date', $evenement->date) }}" class="mt-1 block w-full rounded-md shadow-sm" required>
                    </div>

                    <!-- Aperçu actuel -->
                    <div class="mt-4">
                        <label class="block text-sm font-medium text-gray-700">Image actuelle</label>
                        <img src="{{ asset('storage/' . $evenement->image_apercu) }}" class="w-32 h-32 object-cover mt-2">
                    </div>

                    <!-- Nouvelle image d’aperçu -->
                    <div class="mt-4">
                        <label class="block text-sm font-medium text-gray-700">Nouvelle image d'aperçu (optionnel)</label>
                        <input type="file" name="image_apercu" accept="image/*">
                    </div>

                    <!-- Nouvelles images de détails -->
                    <div class="mt-4">
                        <label class="block text-sm font-medium text-gray-700">Ajouter d'autres images (optionnel)</label>
                        <input type="file" name="images[]" accept="image/*" multiple>
                    </div>

                    <!-- Soumission -->
                    <div class="mt-6">
                        <button type="submit" class="bg-green-600 text-white px-4 py-2 rounded">Mettre à jour</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</x-app-layout>
