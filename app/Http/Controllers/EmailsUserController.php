<?php

namespace App\Http\Controllers;

use App\Models\EmailsUser;
use Illuminate\Http\Request;

class EmailsUserController extends Controller
{
    // ✅ Afficher tous les emails (pour blade)
    public function index()
    {
        $emails = EmailsUser::all();
        return view('emails.index', compact('emails'));
    }

    // ✅ Supprimer un email
    public function destroy($id)
    {
        $email = EmailsUser::findOrFail($id);
        $email->delete();

        return redirect()->route('emails.index')->with('success', 'Email supprimé avec succès');
    }
}
