<x-app-layout>
    <x-slot name="header">
        <h2 class="text-xl font-semibold text-gray-800 dark:text-gray-200">Détails du message</h2>
    </x-slot>

    <div class="p-6 space-y-4">
        <div><strong>Nom Complet:</strong> {{ $message->fullName }}</div>
        <div><strong>Téléphone:</strong> {{ $message->phone }}</div>
        <div><strong>Email:</strong> {{ $message->email }}</div>
        <div><strong>Message:</strong> {{ $message->message }}</div>

        <a href="{{ route('messages.index') }}" class="text-blue-600">← Retour à la liste</a>
    </div>
</x-app-layout>
