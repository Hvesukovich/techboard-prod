<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateGoodsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('goods', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->integer('left_menu_id')->index();
            $table->integer('users_id')->index();
            $table->text('title')->nullable();
            $table->text('description')->nullable();
            $table->text('text')->nullable();
            $table->text('video_link')->nullable();
            $table->text('map')->nullable();
            $table->float('price')->nullable();
            $table->float('old_price')->nullable();
            $table->text('keywords')->nullable();
            $table->boolean('show');
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
        Schema::dropIfExists('goods');
    }
}
