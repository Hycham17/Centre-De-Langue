<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Evenement;

use Illuminate\Http\Request;

class EvenementApiController extends Controller
{
    public function index()
    {
        
        return Evenement::latest()->get();
    }
}
