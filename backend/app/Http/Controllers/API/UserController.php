<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Role;
use App\Models\Users;

class UserController extends Controller
{
    public function list_role(){
        $data = Role::get();
        $response['data']= $data;
        $response['success']= true;
        
        return $response;

    }
    public function create(Request $request){

        try {
            $insert['name']=$request['name'];
            $insert['email']=$request['email'];
            $insert['password']=$request['password'];
            $insert['age']=$request['age'];
            $insert['rol']=$request['rol'];

            Users::inser($insert);

            $response['message']= "Save successfully";
            $response['success']= true;
        } catch (\Exception $e) {
            $response['message']= $e->getMessage();
            $response['success']= false;
        }

        return $response;
    }
    public function list(Request $request){

        try {

            $data = Users::with("role")->get();

            $response['data']= $data;
            $response['message']= "Load successfully";
            $response['success']= true;
        } catch (\Exception $e) {
            $response['message']= $e->getMessage();
            $response['success']= false;
        }

        return $response;
    }
    public function get($id){

        try {
  
          $data = User::with("role")->find($id);
  
          if ($data) {
            $response['data'] = $data;
            $response['message'] = "Load successfully";
            $response['success'] = true;
          }
          else {
            $response['message'] = "Not found data id => $id";
            $response['success'] = false;
          }
  
        } catch (\Exception $e) {
          $response['message'] = $e->getMessage();
          $response['success'] = false;
        }
        return $response;
      }
    
}
