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
    
    public function editGoodAndGetGoodJSON(){
        $input = \Request::all();
//        $input['id'] ='8';
//        $input['name'] ='MTZ-82';
//        $input['categories_id'] ='1';
//        $input['description'] ='MTZ-82 «Белорус»';
//        $input['map'] ='редактирование';
//        $input['price'] ='80000';
//        $input['text'] ='МТЗ-82 «Белорус» представляет собой универсальный, пропашной, колесный, полноприводной трактор с малой кабиной, который выпускается на Минском тракторном заводе. Трактор зарекомендовал себя надежным и высокопроизводительным агрегатом, который отличается простотой в эксплуатации и обслуживании.редактирование';
//        $input['title'] ='title';
//        $input['users_id'] ='2';
//        $input['video_link'] ='https://www.youtube.com/watch?v=E59TJy-xT68редактирование';
//        $input['keywords'] = 'keywords';
//        $input['show'] =false;


        $Goods = new Goods();
        $goodsResponse = $Goods->editGoodAndGetGoodJSON($input);
        return response()
            ->json($goodsResponse)
//            ->json($input)
            ->header('Access-Control-Allow-Origin', '*')
            ->header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
            ->header('Access-Control-Max-Age', '1000')
            ->header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, X-Auth-Token, X-CSRF-TOKEN')
            ;
    }

}
