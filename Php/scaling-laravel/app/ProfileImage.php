<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ProfileImage extends Model
{
    protected $guarded = [];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function toArray()
    {
        return [
            'id'   => $this->id,
            'path' => $this->path,
        ];
    }
}
