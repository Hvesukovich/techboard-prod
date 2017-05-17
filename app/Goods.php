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

    public function getGoodsByCategoriesId($input){
        return $this->where('categories_id', '=', $input['categories_id'])->get()->toArray();
    }
}
