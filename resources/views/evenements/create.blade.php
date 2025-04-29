<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
            Ajouter un événement
        </h2>
    </x-slot>

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white dark:bg-gray-800 shadow-sm sm:rounded-lg p-6">
                <form action="{{ route('evenements.store') }}" method="POST" enctype="multipart/form-data">
                    @csrf

                    <!-- Titre en FR -->
                    <div>
                        <label for="titre_fr" class="block text-sm font-medium text-gray-700">Titre (FR)</label>
                        <input type="text" name="titre_fr" class="mt-1 block w-full rounded-md shadow-sm" required>
                    </div>

                    <!-- Description en FR -->
                    <div class="mt-4">
                        <label for="description_fr" class="block text-sm font-medium text-gray-700">Description (FR)</label>
                        <textarea name="description_fr" rows="4" class="mt-1 block w-full rounded-md shadow-sm" required></textarea>
                    </div>

                    <!-- Titre en EN -->
                    <div class="mt-4">
                        <label for="titre_en" class="block text-sm font-medium text-gray-700">Titre (EN)</label>
                        <input type="text" name="titre_en" class="mt-1 block w-full rounded-md shadow-sm" required>
                    </div>

                    <!-- Description en EN -->
                    <div class="mt-4">
                        <label for="description_en" class="block text-sm font-medium text-gray-700">Description (EN)</label>
                        <textarea name="description_en" rows="4" class="mt-1 block w-full rounded-md shadow-sm" required></textarea>
                    </div>

                    <!-- Titre en AR -->
                    <div class="mt-4">
                        <label for="titre_ar" class="block text-sm font-medium text-gray-700">Titre (AR)</label>
                        <input type="text" name="titre_ar" class="mt-1 block w-full rounded-md shadow-sm" required>
                    </div>

                    <!-- Description en AR -->
                    <div class="mt-4">
                        <label for="description_ar" class="block text-sm font-medium text-gray-700">Description (AR)</label>
                        <textarea name="description_ar" rows="4" class="mt-1 block w-full rounded-md shadow-sm" required></textarea>
                    </div>

                    <!-- Image d'aperçu -->
                    <div class="mt-4">
                        <label for="image_apercu" class="block text-sm font-medium text-gray-700">Image d'aperçu</label>
                        <input type="file" name="image_apercu" accept="image/*" required>
                    </div>

                    <!-- Autres images (détails) -->
                    <div class="mt-4">
                        <label for="images" class="block text-sm font-medium text-gray-700">Autres images (détails)</label>
                        <input type="file" name="images[]" accept="image/*" multiple>
                    </div>

                    <!-- Date -->
                    <div class="mt-4">
                        <label for="date" class="block text-sm font-medium text-gray-700">Date</label>
                        <input type="date" name="date" required>
                    </div>

                    <!-- Bouton de soumission -->
                    <div class="mt-6">
                        <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded-md">Ajouter</button>
                    </div>

                </form>
            </div>
        </div>
    </div>
</x-app-layout>
