<?php

namespace App\Http\Controllers;

use App\Models\BestSeller;
use Illuminate\Http\Request;

class BestSellerController extends Controller
{
    public function index()
    {
        return  BestSeller::all();
    }

    //
}
