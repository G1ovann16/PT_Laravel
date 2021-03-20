<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Role;

class UserController extends Controller
{
    public function list_role(){
        $data = Role::get();
        $response['data']= $data;
        $response['success']= true;
        
        return $response;

    }
}
