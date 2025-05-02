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

                    @foreach (['fr', 'en', 'ar'] as $lang)
                        <div class="mt-4">
                            <label for="title_{{ $lang }}" class="block text-sm font-medium text-gray-700">Titre ({{ strtoupper($lang) }})</label>
                            <input type="text" name="title_{{ $lang }}" class="mt-1 pl-2 h-9 text-white block w-full rounded-md shadow-sm" required>
                        </div>

                        <div class="mt-4">
                            <label for="description_{{ $lang }}" class="block text-sm font-medium text-gray-700">Description ({{ strtoupper($lang) }})</label>
                            <textarea name="description_{{ $lang }}" rows="4" class="mt-1 block w-full rounded-md shadow-sm" required></textarea>
                        </div>
                    @endforeach

                    <div class="mt-4">
                        <label for="images" class="block text-sm font-medium text-gray-700">Images (max)</label>
                        <input type="file" name="images[]" accept="image/*" multiple required>
                    </div>

                    <div class="mt-4">
                        <label for="date" class="block text-sm font-medium text-gray-700">Date</label>
                        <input type="date" name="date" required>
                    </div>

                    <div class="mt-6">
                        <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded-md">Ajouter</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</x-app-layout>
