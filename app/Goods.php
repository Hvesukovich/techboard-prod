<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Goods extends Model
{
    protected $table = 'goods';
    protected $fillable = [
        'id',
        'name',
        'categories_id',
        'users_id',
        'title',
        'description',
        'text',
        'video_link',
        'map',
        'price',
        'old_price',
        'keywords',
        'show'
    ];

    public function getAllGoodsIds(){
        return $this->select('id', 'categories_id', 'users_id')->get()->toArray();
    }
}
