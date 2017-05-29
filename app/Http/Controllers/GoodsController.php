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
//        $input['id'] ='2';
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
        
//        $json = '{"id":"2","name":"MTZ-82111111","categories_id":"1","users_id":"1","description":"MTZ-82 \u00ab\u0411\u0435\u043b\u043e\u0440\u0443\u0441\u00bb","text":"\u041c\u0422\u0417-82 \u00ab\u0411\u0435\u043b\u043e\u0440\u0443\u0441\u00bb \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u0441\u043e\u0431\u043e\u0439 \u0443\u043d\u0438\u0432\u0435\u0440\u0441\u0430\u043b\u044c\u043d\u044b\u0439, \u043f\u0440\u043e\u043f\u0430\u0448\u043d\u043e\u0439, \u043a\u043e\u043b\u0435\u0441\u043d\u044b\u0439, \u043f\u043e\u043b\u043d\u043e\u043f\u0440\u0438\u0432\u043e\u0434\u043d\u043e\u0439 \u0442\u0440\u0430\u043a\u0442\u043e\u0440 \u0441 \u043c\u0430\u043b\u043e\u0439 \u043a\u0430\u0431\u0438\u043d\u043e\u0439, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0432\u044b\u043f\u0443\u0441\u043a\u0430\u0435\u0442\u0441\u044f \u043d\u0430 \u041c\u0438\u043d\u0441\u043a\u043e\u043c \u0442\u0440\u0430\u043a\u0442\u043e\u0440\u043d\u043e\u043c \u0437\u0430\u0432\u043e\u0434\u0435. \u0422\u0440\u0430\u043a\u0442\u043e\u0440 \u0437\u0430\u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u043e\u0432\u0430\u043b \u0441\u0435\u0431\u044f \u043d\u0430\u0434\u0435\u0436\u043d\u044b\u043c \u0438 \u0432\u044b\u0441\u043e\u043a\u043e\u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u043c \u0430\u0433\u0440\u0435\u0433\u0430\u0442\u043e\u043c, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043e\u0442\u043b\u0438\u0447\u0430\u0435\u0442\u0441\u044f \u043f\u0440\u043e\u0441\u0442\u043e\u0442\u043e\u0439 \u0432 \u044d\u043a\u0441\u043f\u043b\u0443\u0430\u0442\u0430\u0446\u0438\u0438 \u0438 \u043e\u0431\u0441\u043b\u0443\u0436\u0438\u0432\u0430\u043d\u0438\u0438.\u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435","video_link":"https:\/\/www.youtube.com\/watch?v=E59TJy-xT68\u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435","map":"\u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435","price":"80000","title":"title","keywords":"keywords","show":"0"}';
//        $input = json_decode($json, true);
//        dd($input);
        $Goods = new Goods();
        $goodsResponse = $Goods->editGoodAndGetGoodJSON($input);
        return response()
            ->json($goodsResponse)
            ->header('Access-Control-Allow-Origin', '*')
            ->header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
            ->header('Access-Control-Max-Age', '1000')
            ->header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, X-Auth-Token, X-CSRF-TOKEN')
            ;
    }

    public function delGoodById(){
        $input = \Request::all();
//        $input['id'] = 1;
//        dd($input);

        $Goods = new Goods();
        $goodsResponse = $Goods->delGoodById($input);
        return response()
            ->json($goodsResponse)
            ->header('Access-Control-Allow-Origin', '*')
            ->header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
            ->header('Access-Control-Max-Age', '1000')
            ->header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, X-Auth-Token, X-CSRF-TOKEN')
            ;
    }
}
