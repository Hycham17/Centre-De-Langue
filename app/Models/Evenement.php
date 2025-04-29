<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Evenement extends Model
{
    protected $fillable = [
        'titre_fr',
        'titre_en',
        'titre_ar',
        'description_fr',
        'description_en',
        'description_ar',
        'date',
        'image_apercu',
        'images_details',
    ];
}
