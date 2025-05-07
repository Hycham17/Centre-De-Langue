<x-guest-layout>
    <div class="mb-6 text-sm text-gray-700 dark:text-gray-300 text-center">
        {{ __('Vous avez oublié votre mot de passe ? Pas de problème. Il vous suffit de nous indiquer votre adresse e-mail et nous vous enverrons un lien de réinitialisation qui vous permettra de choisir un nouveau mot de passe.') }}
    </div>

    <!-- Statut de la session -->
    <x-auth-session-status class="mb-4" :status="session('status')" />

    <form method="POST" action="{{ route('password.email') }}">
        @csrf

        <!-- Adresse e-mail -->
        <div class="mb-6">
            <x-input-label for="email" :value="'Adresse e-mail'" class="text-gray-700 font-semibold" />
            <x-text-input id="email" class="block mt-1 w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300" type="email" name="email" :value="old('email')" required autofocus />
            <x-input-error :messages="$errors->get('email')" class="mt-2 text-sm text-red-600" />
        </div>

        <div class="flex items-center justify-center mt-6">
            <x-primary-button class="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition duration-300">
                Envoyer le lien
            </x-primary-button>
        </div>
    </form>
</x-guest-layout>
