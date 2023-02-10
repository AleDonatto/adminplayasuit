<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\File;
use Illuminate\Support\Facades\DB;

use App\Models\Habitaciones;

class HabitacionesController extends Controller
{
    //
    public function CreateHabitaciones(Request $request){
        $request->validate([
            'nombre' => 'required|string',
            'entrada' => 'required',
            'salida' => 'required',
            //'image' => 'image|max:25600|mimes:jpeg,jpg,png,svg',
            //'urlImage' => 'string',
        ]);

        $path = '';

        if($request->urlImage != ''){
            $request->validate([
                'urlImage' => 'string',
            ]);
            $path = $request->urlImage;
        }else if(!empty($request->imageH)){
            $request->validate([
                'imageH' => 'image|max:25600|mimes:jpeg,jpg,png,svg',
            ]);
            $path = $request->file('imageH')->store('images', 'public');
        }

        $habitacion = new Habitaciones();
        $habitacion->nombre = $request->nombre;
        $habitacion->entrada = $request->entrada;
        $habitacion->salida = $request->salida;
        $habitacion->vista = $request->vista;
        $habitacion->amenidades = $request->amenidades;
        $habitacion->Damenidades = $request->damenidades;
        $habitacion->urlImage = $path;
        $habitacion->save();

        $test = array(
            'name' => $request->nombre,
            'salida' => $request->salida,
            'entrada' => $request->entrada,
            'vista' => $request->vista,
            'amenidades' => $request->amenidades,
            'Damenidades' => $request->damenidades,
            'urlImage' => $path
        );

        return response()->json([
            'statusText' => 'Habitacion Creada',
            'object' => $test
        ]);
        
    }

    public function ListHabitaciones(){

    }
}
