<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
 */
public function up(): void
{
    if (!Schema::hasTable('emails_users')) {
        Schema::create('emails_users', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
        });
    }
}


    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('emails_users');
    }
};
