<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
//    protected $table = 'users';
    protected $fillable = [
        'name',
        'email',
        'password',
        'role',
        'remember_token',
        'created_at',
        'updated_at'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
//    protected $hidden = [
//        'password', 'remember_token',
//    ];

    public function createUser($input){
        return $this->create([
            'name' => $input['name'], 'email' => $input['email'], 'phone' => $input['phone'], 'password' => $input['password']
        ]);//Создание
    }

    public function openUser($input){
        return  $this->where('email', '=', $input['username'])->where('password', '=', $input['userpassword'])->get()->toArray();
    }
}
