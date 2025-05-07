<?php

namespace App\Http\Controllers;

use App\Models\EmailsUser;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

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
    public function sendEmails(Request $request)
{
    $request->validate([
        'emails' => 'required|array',
        'subject' => 'required|string',
        'message' => 'required|string',
    ]);

    foreach ($request->emails as $email) {
        Mail::raw($request->message, function ($msg) use ($email, $request) {
            $msg->to($email)
                ->subject($request->subject);
        });
    }

    return redirect()->route('emails.index')->with('success', 'E-mails envoyés avec succès.');
}
}
