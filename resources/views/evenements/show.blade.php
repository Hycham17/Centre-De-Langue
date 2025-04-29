<x-app-layout>
    <x-slot name="header">
        <h2 class="text-xl font-semibold text-gray-800 dark:text-gray-200">
            Détails de l’événement
        </h2>
    </x-slot>

    <div class="p-6">
        <a href="{{ route('evenements.index') }}" class="text-blue-500 underline mb-4 inline-block">← Retour à la liste</a>

        <div class="bg-white dark:bg-gray-800 p-6 rounded shadow">
            <h3 class="text-lg font-bold mb-2">{{ $evenement->titre_fr }}</h3>
            <p class="text-sm text-gray-600 mb-2">Date : {{ $evenement->date }}</p>

            <div class="mb-4">
                <h4 class="font-semibold">Description FR :</h4>
                <p>{{ $evenement->description_fr }}</p>
            </div>

            <div class="mb-4">
                <h4 class="font-semibold">Description EN :</h4>
                <p>{{ $evenement->description_en }}</p>
            </div>

            <div class="mb-4">
                <h4 class="font-semibold">Description AR :</h4>
                <p dir="rtl">{{ $evenement->description_ar }}</p>
            </div>

            <div class="mb-4">
                <h4 class="font-semibold">Image d’aperçu :</h4>
                <img src="{{ asset('storage/' . $evenement->image_apercu) }}" class="w-64 h-auto mt-2">
            </div>

            @if ($evenement->images_details)
                <div>
                    <h4 class="font-semibold">Images de détails :</h4>
                    <div class="flex flex-wrap gap-4 mt-2">
                        @foreach (json_decode($evenement->images_details, true) as $image)
                            <img src="{{ asset('storage/' . $image) }}" class="w-40 h-auto rounded border">
                        @endforeach
                    </div>
                </div>
            @endif
        </div>
    </div>
</x-app-layout>
