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

    public function getGoodsId($input){
        return $this->select(
            'id', 'name', 'title', 'description', 'price', 'old_price', 'show', 'created_at', 'updated_at'
        )->whereIN('id', $input['arr_idGoods'])->get()->toArray();
    }

    public function getGoodId($input){
        return $this->where('id', '=', $input['id'])->get()->toArray();
    }

}
