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
    Schema::create('evenements', function (Blueprint $table) {
        $table->id();
        $table->string('titre_fr');
        $table->string('titre_en');
        $table->string('titre_ar');
        $table->text('description_fr');
        $table->text('description_en');
        $table->text('description_ar');
        $table->date('date');
        $table->string('image_apercu'); // une image pour l'aperçu
        $table->json('images_details')->nullable(); // plusieurs images (tableau JSON)
        $table->timestamps();
    });
}


    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('evenements');
    }
};
