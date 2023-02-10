<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Habitaciones extends Model
{
    use HasFactory;

    protected $table = 'habitaciones';
    protected $primaryKey = 'idHabitacion';

    protected $fillable = [
        'nombre',
        'entrada',
        'salida',
        'vista',
        'amenidades',
        'Damenidades',
        'urlImage'
    ];

}
