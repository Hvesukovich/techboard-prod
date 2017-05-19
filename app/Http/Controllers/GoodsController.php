<?php

namespace App\Http\Controllers;

use App\Goods;
use Illuminate\Http\Request;

class GoodsController extends Controller
{
    public function getAllGoodsIdsJSON(){
        $Goods = new Goods();
        $goodsResponse = $Goods->getAllGoodsIds();
        return response()
            ->json($goodsResponse)
            ->header('Access-Control-Allow-Origin', '*')
            ->header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
            ->header('Access-Control-Max-Age', '1000')
            ->header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, X-Auth-Token, X-CSRF-TOKEN')
            ;

    }

    public function getGoodsIdJSON(){
        $input = \Request::all();
        $input['arr_idGoods'] = explode(',', $input['arr_idGoods']);

        $Goods = new Goods();
        $goodsResponse = $Goods->getGoodsId($input);
        return response()
            ->json($goodsResponse)
            ->header('Access-Control-Allow-Origin', '*')
            ->header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
            ->header('Access-Control-Max-Age', '1000')
            ->header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, X-Auth-Token, X-CSRF-TOKEN')
            ;
    }

    public function getGoodIdJSON(){
        $input = \Request::all();
//        $input['id'] = 1;

        $Goods = new Goods();
        $goodsResponse = $Goods->getGoodId($input);
        return response()
            ->json($goodsResponse)
            ->header('Access-Control-Allow-Origin', '*')
            ->header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
            ->header('Access-Control-Max-Age', '1000')
            ->header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, X-Auth-Token, X-CSRF-TOKEN')
            ;
    }

}
