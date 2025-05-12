<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Message;
use Illuminate\Support\Str;

class MessageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        for ($i = 1; $i <= 20; $i++) {
            Message::create([
                'fullName' => "Testeur $i",
                'phone' => "06000000" . rand(10, 99),
                'email' => "test$i@example.com",
                'message' => "Ceci est un message numéro $i.",
            ]);
        }
    }
}
