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

    public function editGoodAndGetGoodJSON($input){
        if(isset($input['id'])){
            $this->find($input['id'])->update($input);//Редактирование только по ID
            return $this->where('updated_at', '=', $this->max('updated_at'))->get()->toArray();
        }
        else
        {
            $this->create([
                'name' => $input['name'], 'categories_id' => $input['categories_id'],'users_id' => $input['users_id'],
                'title' => $input['title'], 'description' => $input['description'], 'text' => $input['text'],
                'video_link' => $input['video_link'], 'map' => $input['map'], 'price' => $input['price'],
                'keywords' => $input['keywords'], 'show' => $input['show']
            ]);
            return $this->where('created_at', '=', $this->max('created_at'))->get()->toArray();
        }
    }

}
