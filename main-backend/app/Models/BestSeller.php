<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Casts\Attribute;

class BestSeller extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'img',
        'price',
        'liked'
    ];

    protected function img(): Attribute
    {
        return Attribute::make(
            get: fn(string $value) => 'http://localhost:8000/storage/images/' . $value,
            set: fn(string $value) => str_replace('http://localhost:8000/storage/images/', '', $value),
        );
    }
}
