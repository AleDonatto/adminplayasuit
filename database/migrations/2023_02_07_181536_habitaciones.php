<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        Schema::create('habitaciones', function (Blueprint $table) {
            $table->id('idHabitacion');
            $table->string('nombre');
            $table->time('entrada');
            $table->time('salida');
            $table->string('vista');
            $table->string('amenidades');
            $table->string('Damenidades');
            $table->string('urlImage');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
        Schema::dropIfExists('habitaciones');
    }
};
