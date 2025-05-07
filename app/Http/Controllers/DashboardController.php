<?php

namespace App\Http\Controllers;

use App\Models\EmailsUser;
use App\Models\Evenement;
use App\Models\Message;
use Illuminate\View\View;
use Illuminate\Support\Facades\Log;

class DashboardController extends Controller
{
    /**
     * Display the admin dashboard.
     */
    public function index(): View
    {
        // إحصائيات الأعداد
        $emailsUserCount = EmailsUser::count();
        $evenementCount = Evenement::count();
        $messageCount = Message::count();

        // تتبع الإحصائيات في السجلات بعد تعريفهم
        Log::info('Emails User Count: ' . $emailsUserCount);
        Log::info('Evenement Count: ' . $evenementCount);
        Log::info('Message Count: ' . $messageCount);

        // تمرير المتغيرات إلى الـ view
        return view('dashboard', [
            'emailsUserCount' => $emailsUserCount,
            'evenementCount' => $evenementCount,
            'messageCount' => $messageCount,
        ]);
    }
}
