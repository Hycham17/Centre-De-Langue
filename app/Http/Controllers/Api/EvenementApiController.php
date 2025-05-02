<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Evenement;
use Illuminate\Http\Request;

class EvenementApiController extends Controller
{
    // لعرض جميع الأحداث
    public function index()
    {
        return Evenement::latest()->get(); // إعادة الأحداث الحديثة
        return response()->json($evenements);
    }

    // لعرض تفاصيل الحدث
    public function show($id)
    {
        $evenement = Evenement::findOrFail($id); // العثور على الحدث باستخدام الـ id
        return $evenement; // إرجاع تفاصيل الحدث
    }
}
