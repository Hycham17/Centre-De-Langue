<x-app-layout>
    <x-slot name="header">
        <h2 class="text-3xl font-bold text-white tracking-wide leading-tight animate-glow">
            {{ __('Détails de l’événement') }}
        </h2>
    </x-slot>

    <div class="p-8">
        <a href="{{ route('evenements.index') }}"
           class="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium transition duration-200 animate-slide-up">
            ← Retour à la liste
        </a>

        <div class="mt-6 bg-gradient-to-br from-white/90 to-gray-50 dark:from-gray-800/90 dark:to-gray-900 backdrop-blur-md p-8 rounded-2xl shadow-2xl relative overflow-hidden border border-gray-200 dark:border-gray-700">
            
            <!-- Effet d’arrière-plan -->
            <div class="absolute inset-0 bg-gradient-to-tr from-indigo-300/10 via-pink-300/10 to-yellow-300/10 pointer-events-none animate-pulse-slow"></div>

            <div class="relative z-10 space-y-6">
                <h3 class="text-2xl font-semibold text-indigo-600 dark:text-indigo-400">{{ $evenement->title_fr }}</h3>
                <p class="text-sm text-gray-500 dark:text-gray-400">Date : <span class="font-medium">{{ $evenement->date }}</span></p>

                @foreach (['fr', 'en', 'ar'] as $lang)
                    <div class="animate-slide-up-delayed" style="--delay: {{ $loop->index * 0.2 }}s">
                        <h4 class="text-md font-semibold text-gray-700 dark:text-gray-300">Description ({{ strtoupper($lang) }})</h4>
                        <p @if($lang === 'ar') dir="rtl" @endif class="text-gray-800 dark:text-gray-200 text-sm leading-relaxed">{{ $evenement->{'description_'.$lang} }}</p>
                    </div>
                @endforeach

                @if ($evenement->images)
                    <div class="animate-slide-up-delayed" style="--delay: 0.6s">
                        <h4 class="text-md font-semibold text-gray-700 dark:text-gray-300">Images :</h4>
                        <div class="flex flex-wrap gap-4 mt-3">
                            @foreach ($evenement->images as $img)
                                <div class="relative group w-44 overflow-hidden rounded-xl border dark:border-gray-600 shadow-lg">
                                    <img src="{{ $img }}" class="w-full h-auto object-cover transition-transform duration-300 transform group-hover:scale-105">
                                    <div class="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                                </div>
                            @endforeach
                        </div>
                    </div>
                @endif
            </div>
        </div>
    </div>

    <style>
        .animate-slide-up {
            animation: slideUp 0.8s ease-out forwards;
        }
        .animate-slide-up-delayed {
            animation: slideUp 0.8s ease-out forwards;
            animation-delay: var(--delay);
        }
        .animate-glow {
            animation: glow 1.8s ease-in-out infinite alternate;
        }
        .animate-pulse-slow {
            animation: pulseSlow 8s ease-in-out infinite;
        }

        @keyframes slideUp {
            0% { transform: translateY(40px); opacity: 0; }
            100% { transform: translateY(0); opacity: 1; }
        }
        @keyframes glow {
            0% { text-shadow: 0 0 6px rgba(255, 255, 255, 0.4); }
            100% { text-shadow: 0 0 16px rgba(255, 255, 255, 0.9); }
        }
        @keyframes pulseSlow {
            0%, 100% { opacity: 0.2; transform: scale(1); }
            50% { opacity: 0.4; transform: scale(1.02); }
        }
    </style>
</x-app-layout>
