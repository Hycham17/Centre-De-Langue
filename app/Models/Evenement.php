<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Evenement extends Model
{
    use HasFactory;

    protected $fillable = [
        'title_fr',
        'title_en',
        'title_ar',
        'description_fr',
        'description_en',
        'description_ar',
        'date',
        'images',
    ];

    protected $casts = [
        'images' => 'array',
        'date' => 'date',
    ];

    // accessor باش نرجعو روابط كاملة للصور
    public function getImagesAttribute($value)
    {
        $images = json_decode($value, true);

        return array_map(function ($image) {
            return asset('storage/' . $image);
        }, $images);
    }
}
