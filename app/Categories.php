<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Categories extends Model
{
    protected $table = 'categories';
    protected $fillable = [
        'name',
        'parent_id',
        'title',
        'description',
        'text',
        'keywords',
        'show'
    ];

    public function getAllCategories(){
        return $this->get()->toArray();
    }
}
