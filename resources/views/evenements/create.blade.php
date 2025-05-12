<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-2xl text-white leading-tight animate-glow">
            Ajouter un événement
        </h2>
    </x-slot>

    <div class="py-12 relative">
        <!-- Fond animé -->
        <div class="absolute inset-0 bg-gradient-to-br from-blue-200/20 via-orange-100/20 to-pink-200/20 animate-pulse-slow z-0 rounded-xl"></div>

        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 relative z-10">
            <div class="bg-white/95 dark:bg-gray-800/95 shadow-xl rounded-xl p-8 animate-slide-up">
            <div class="animate-slide-up-delayed" style="--delay: 0.95s">
                        <a href="{{ route('evenements.index') }}" class="inline-flex items-center text-sm text-blue-600 hover:underline hover:text-blue-800 transition">
                            ← Retour à la liste
                        </a>
                    </div>
                <form action="{{ route('evenements.store') }}" method="POST" enctype="multipart/form-data" class="space-y-6">
                    @csrf

                    @foreach (['fr', 'en', 'ar'] as $lang)
                        <div class="animate-slide-up-delayed" style="--delay: {{ $loop->index * 0.2 }}s">
                            <label for="title_{{ $lang }}" class="block text-sm font-semibold text-gray-700 dark:text-gray-200">Titre ({{ strtoupper($lang) }})</label>
                            <input type="text" name="title_{{ $lang }}" class="mt-1 block w-full rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none p-2 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100" required>
                        </div>

                        <div class="animate-slide-up-delayed" style="--delay: {{ $loop->index * 0.2 + 0.1 }}s">
                            <label for="description_{{ $lang }}" class="block text-sm font-semibold text-gray-700 dark:text-gray-200">Description ({{ strtoupper($lang) }})</label>
                            <textarea name="description_{{ $lang }}" rows="4" class="mt-1 block w-full rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none p-2 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100" required></textarea>
                        </div>
                    @endforeach

                    <div class="animate-slide-up-delayed" style="--delay: 0.6s">
                        <label for="images" class="block text-sm font-semibold text-gray-700 dark:text-gray-200">Images</label>
                        <input type="file" name="images[]" accept="image/*" multiple required class="mt-1 text-sm text-gray-700 dark:text-gray-100">
                    </div>

                    <div class="animate-slide-up-delayed" style="--delay: 0.8s">
                        <label for="date" class="block text-sm font-semibold text-gray-700 dark:text-gray-200">Date</label>
                        <input type="date" name="date" required class="mt-1 block w-full rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none p-2 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100">
                    </div>

                    

                    <div class="animate-slide-up-delayed" style="--delay: 1.1s">
                        <button type="submit" class="bg-blue-600 hover:bg-blue-700 transition-colors duration-300 text-white px-6 py-2 rounded-md shadow-md font-semibold hover:shadow-lg">
                            Ajouter
                        </button>
                    </div>
                </form>
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
            animation: glow 1.5s ease-in-out infinite alternate;
        }

        .animate-pulse-slow {
            animation: pulseSlow 6s ease-in-out infinite;
        }

        @keyframes slideUp {
            0% { transform: translateY(30px); opacity: 0; }
            100% { transform: translateY(0); opacity: 1; }
        }

        @keyframes glow {
            0% { text-shadow: 0 0 5px rgba(255, 255, 255, 0.5); }
            100% { text-shadow: 0 0 15px rgba(255, 255, 255, 1); }
        }

        @keyframes pulseSlow {
            0% { opacity: 0.3; transform: scale(1); }
            50% { opacity: 0.6; transform: scale(1.02); }
            100% { opacity: 0.3; transform: scale(1); }
        }
    </style>
</x-app-layout>
