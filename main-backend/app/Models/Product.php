<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'img',
        'price',
        'category'
    ];

    protected $hidden = [
        'likes'
    ];

    protected function img(): Attribute
    {
        return Attribute::make(
            get: fn(string $value) => 'http://localhost:8000/images/' . $value,
            set: fn(string $value) => str_replace('images/', '', $value),
        );
    }


    public function likes(): BelongsToMany
    {
        return $this->belongsToMany(User::class, 'users_likes');
    }

    public function isLikedByUser()
    {
        return $this->likes->contains(auth('sanctum')->user());
    }
}
