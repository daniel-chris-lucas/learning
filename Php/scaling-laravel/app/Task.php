<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    protected $guarded = [];
    public $timestamps = false;

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function complete()
    {
        $this->completed_at = new \DateTime;
        $this->save();
        return $this;
    }
}
