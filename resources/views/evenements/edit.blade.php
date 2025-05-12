<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-2xl text-gray-800 dark:text-gray-200 leading-tight">
            Modifier l'événement
        </h2>
    </x-slot>

    <div class="py-12">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <a href="{{ route('evenements.index') }}"
               class="inline-flex items-center text-sm text-blue-600 hover:underline hover:text-blue-800 transition">
                ← Retour à la liste
            </a>

            <div class="bg-white dark:bg-gray-800 mt-6 rounded-2xl shadow-lg p-8 space-y-6">
                <form action="{{ route('evenements.update', $evenement) }}" method="POST" enctype="multipart/form-data" class="space-y-6">
                    @csrf
                    @method('PUT')

                    @foreach (['fr', 'en', 'ar'] as $lang)
                        <div>
                            <label class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
                                Titre ({{ strtoupper($lang) }})
                            </label>
                            <input type="text" name="title_{{ $lang }}"
                                   value="{{ old('title_'.$lang, $evenement->{'title_'.$lang}) }}"
                                   class="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
                                   required>
                        </div>

                        <div>
                            <label class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
                                Description ({{ strtoupper($lang) }})
                            </label>
                            <textarea name="description_{{ $lang }}" rows="4"
                                      class="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
                                      required>{{ old('description_'.$lang, $evenement->{'description_'.$lang}) }}</textarea>
                        </div>
                    @endforeach

                    <div>
                        <label class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
                            Ajouter de nouvelles images (optionnel)
                        </label>
                        <input type="file" name="images[]" accept="image/*" multiple
                               class="w-full text-gray-700 dark:text-gray-300">
                    </div>

                    <div>
                        <label class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
                            Date
                        </label>
                        <input type="date" name="date" value="{{ old('date', $evenement->date) }}"
                               class="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
                               required>
                    </div>

                    <div class="pt-4">
                        <button type="submit"
                                class="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded-lg shadow transition">
                            ✅ Mettre à jour
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</x-app-layout>
