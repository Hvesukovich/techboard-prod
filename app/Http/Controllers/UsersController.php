<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;

class UsersController extends Controller
{
    public function createUser(){
        $input = \Request::all();
//        $input['name'] = 1;
//        $input['email'] = 1;
//        $input['phone'] = 1;
//        $input['password'] = 1;

        $User = new User();
        $goodsResponse = $User->createUser($input);
        return response()
            ->json($goodsResponse)
            ->header('Access-Control-Allow-Origin', '*')
            ->header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
            ->header('Access-Control-Max-Age', '1000')
            ->header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, X-Auth-Token, X-CSRF-TOKEN')
            ;
    }

    public function openUser(){
        $input = \Request::all();
//        $input['username'] = 'nikolai@gmail.ru';
//        $input['userpassword'] = 'hcfo39h;';

        $User = new User();
        $goodsResponse = $User->openUser($input);
        return response()
            ->json($goodsResponse)
            ->header('Access-Control-Allow-Origin', '*')
            ->header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
            ->header('Access-Control-Max-Age', '1000')
            ->header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, X-Auth-Token, X-CSRF-TOKEN')
            ;
    }
}
