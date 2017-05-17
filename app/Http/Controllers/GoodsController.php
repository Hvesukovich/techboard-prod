<?php

namespace App\Http\Controllers;

use App\Goods;
use Illuminate\Http\Request;

class GoodsController extends Controller
{
    public function getGoodsByCategoriesIdJSON(){
        $input = \Request::all();
        $input['categories_id'] = 3;

        $Goods = new Goods();
        $goodsResponse = $Goods->getGoodsByCategoriesId($input);
        return response()
            ->json($goodsResponse)
            ->header('Access-Control-Allow-Origin', '*')
            ->header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
            ->header('Access-Control-Max-Age', '1000')
            ->header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, X-Auth-Token, X-CSRF-TOKEN')
            ;

    }
}
