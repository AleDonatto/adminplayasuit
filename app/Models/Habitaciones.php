<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Habitaciones extends Model
{
    use HasFactory;

    protected $table = 'habitaciones';
    protected $primaryKey = 'idHabitaciones';

    protected $attributes = [
        'nombre',
        'entrada',
        'salida',
        'vista',
        'amenidades',
        'Damenidades',
        'urlImage'
    ];

}
