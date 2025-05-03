<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\EmailsUser;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class EmailsUserApiController extends Controller
{
    // store: enregistrer un nouvel email
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email|unique:emails_users,email',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $email = EmailsUser::create([
            'email' => $request->email,
        ]);

        return response()->json(['message' => 'Email ajouté avec succès', 'data' => $email], 201);
    }
}
