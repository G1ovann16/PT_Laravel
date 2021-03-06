<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Users extends Model
{
    use HasFactory;

    protected $table = "users";

    protected $fillable = [
        'name',
        'email',
        'age',
        'password',
        'rol'
    ];
    
    public function role(){
        return $this->belongsTo('App\Models\Role',"rol");
    } 
}
