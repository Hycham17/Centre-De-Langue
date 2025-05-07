<x-guest-layout>
    <div class="max-w-md mx-auto bg-white p-8 rounded-2xl shadow-lg mt-10">
        <h2 class="text-2xl font-bold text-center text-gray-800 mb-6">Réinitialiser le mot de passe</h2>

        <form method="POST" action="{{ route('password.store') }}">
            @csrf

            <!-- Jeton de réinitialisation -->
            <input type="hidden" name="token" value="{{ $request->route('token') }}">

            <!-- Adresse e-mail -->
            <div class="mb-4">
                <x-input-label for="email" :value="'Adresse e-mail'" class="text-gray-700" />
                <x-text-input id="email" class="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" type="email" name="email" :value="old('email', $request->email)" required autofocus autocomplete="username" />
                <x-input-error :messages="$errors->get('email')" class="mt-1 text-sm text-red-600" />
            </div>

            <!-- Mot de passe -->
            <div class="mb-4">
                <x-input-label for="password" :value="'Nouveau mot de passe'" class="text-gray-700" />
                <x-text-input id="password" class="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" type="password" name="password" required autocomplete="new-password" />
                <x-input-error :messages="$errors->get('password')" class="mt-1 text-sm text-red-600" />
            </div>

            <!-- Confirmation mot de passe -->
            <div class="mb-6">
                <x-input-label for="password_confirmation" :value="'Confirmer le mot de passe'" class="text-gray-700" />
                <x-text-input id="password_confirmation" class="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" type="password" name="password_confirmation" required autocomplete="new-password" />
                <x-input-error :messages="$errors->get('password_confirmation')" class="mt-1 text-sm text-red-600" />
            </div>

            <div class="flex items-center justify-end">
                <x-primary-button class="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg">
                    Réinitialiser le mot de passe
                </x-primary-button>
            </div>
        </form>
    </div>
</x-guest-layout>
