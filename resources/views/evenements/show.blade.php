<x-app-layout>
    <x-slot name="header">
        <h2 class="text-xl font-semibold text-gray-800 dark:text-gray-200">
            Détails de l’événement
        </h2>
    </x-slot>

    <div class="p-6">
        <a href="{{ route('evenements.index') }}" class="text-blue-500 underline mb-4 inline-block">← Retour à la liste</a>

        <div class="bg-white dark:bg-gray-800 p-6 rounded shadow">
            <h3 class="text-lg font-bold mb-2">{{ $evenement->title_fr }}</h3>
            <p class="text-sm text-gray-600 mb-2">Date : {{ $evenement->date }}</p>

            @foreach (['fr', 'en', 'ar'] as $lang)
                <div class="mb-4">
                    <h4 class="font-semibold">Description ({{ strtoupper($lang) }}) :</h4>
                    <p @if($lang === 'ar') dir="rtl" @endif>{{ $evenement->{'description_'.$lang} }}</p>
                </div>
            @endforeach

            @if ($evenement->images)
                <div>
                    <h4 class="font-semibold">Images :</h4>
                    <div class="flex flex-wrap gap-4 mt-2">
                    @foreach ($evenement->images as $img)
    <img src="{{ $img }}" class="w-40 h-auto rounded border">
@endforeach

                    </div>
                </div>
            @endif
        </div>
    </div>
</x-app-layout>
