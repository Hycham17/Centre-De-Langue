<?php

namespace App\Http\Controllers;

use App\Models\Evenement;
use Illuminate\Http\Request;

class EvenementController extends Controller
{
    public function index()
    {
        $evenements = Evenement::latest()->get();
        return view('evenements.index', compact('evenements'));
    }

    public function create()
    {
        return view('evenements.create');
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'titre_fr' => 'required|string',
            'titre_en' => 'required|string',
            'titre_ar' => 'required|string',
            'description_fr' => 'required|string',
            'description_en' => 'required|string',
            'description_ar' => 'required|string',
            'date' => 'required|date',
            'image_apercu' => 'required|image',
            'images.*' => 'image',
        ]);

        $data['image_apercu'] = $request->file('image_apercu')->store('evenements/apercu', 'public');

        $imagesDetails = [];
        if ($request->hasFile('images')) {
            foreach ($request->file('images') as $image) {
                $imagesDetails[] = $image->store('evenements/details', 'public');
            }
        }

        $data['images_details'] = json_encode($imagesDetails);

        Evenement::create($data);

        return redirect()->route('evenements.index')->with('success', 'Événement ajouté avec succès.');
    }

    public function edit(Evenement $evenement)
    {
        return view('evenements.edit', compact('evenement'));
    }

    public function update(Request $request, Evenement $evenement)
    {
        $data = $request->validate([
            'titre_fr' => 'required|string',
            'titre_en' => 'required|string',
            'titre_ar' => 'required|string',
            'description_fr' => 'required|string',
            'description_en' => 'required|string',
            'description_ar' => 'required|string',
            'date' => 'required|date',
            'image_apercu' => 'nullable|image',
            'images.*' => 'image',
        ]);

        if ($request->hasFile('image_apercu')) {
            $data['image_apercu'] = $request->file('image_apercu')->store('evenements/apercu', 'public');
        }

        if ($request->hasFile('images')) {
            $imagesDetails = [];
            foreach ($request->file('images') as $image) {
                $imagesDetails[] = $image->store('evenements/details', 'public');
            }
            $data['images_details'] = json_encode($imagesDetails);
        }

        $evenement->update($data);

        return redirect()->route('evenements.index')->with('success', 'Événement mis à jour.');
    }

    public function destroy(Evenement $evenement)
    {
        $evenement->delete();
        return redirect()->route('evenements.index')->with('success', 'Événement supprimé.');
    }

    public function show(Evenement $evenement)
    {
        return view('evenements.show', compact('evenement'));
    }
}


// class EvenementController extends Controller
// {
//     /**
//      * Display a listing of the resource.
//      */
//     public function index()
// {
//     $evenements = Evenement::latest()->get(); // tous les événements
//     return view('evenements.index', compact('evenements'));
// }


//     /**
//      * Show the form for creating a new resource.
//      */
//     public function create()
//     {
//         //
//     }

//     /**
//      * Store a newly created resource in storage.
//      */
//     public function store(Request $request)
// {
//     $data = $request->validate([
//         'titre_fr' => 'required|string',
//         'titre_en' => 'required|string',
//         'titre_ar' => 'required|string',
//         'description_fr' => 'required|string',
//         'description_en' => 'required|string',
//         'description_ar' => 'required|string',
//         'date' => 'required|date',
//         'image_apercu' => 'required|image',
//         'images.*' => 'image',
//     ]);

//     // Stocker image d’aperçu
//     $data['image_apercu'] = $request->file('image_apercu')->store('evenements/apercu', 'public');

//     // Stocker les images de détail
//     $imagesDetails = [];
//     if ($request->hasFile('images')) {
//         foreach ($request->file('images') as $image) {
//             $imagesDetails[] = $image->store('evenements/details', 'public');
//         }
//     }

//     $data['images_details'] = json_encode($imagesDetails);

//     Evenement::create($data);

//     return redirect()->route('dashboard')->with('success', 'Événement ajouté avec succès.');
// }


//     /**
//      * Display the specified resource.
//      */
//     public function show(Evenement $evenement)
//     {
//         //
//     }

//     /**
//      * Show the form for editing the specified resource.
//      */
//     public function edit(Evenement $evenement)
// {
//     return view('evenements.edit', compact('evenement'));
// }


//     /**
//      * Update the specified resource in storage.
//      */
//     public function update(Request $request, Evenement $evenement)
// {
//     $data = $request->validate([
//         'titre_fr' => 'required|string',
//         'titre_en' => 'required|string',
//         'titre_ar' => 'required|string',
//         'description_fr' => 'required|string',
//         'description_en' => 'required|string',
//         'description_ar' => 'required|string',
//         'date' => 'required|date',
//         'image_apercu' => 'nullable|image',
//         'images.*' => 'image',
//     ]);

//     // Mise à jour de l'image d’aperçu si elle est changée
//     if ($request->hasFile('image_apercu')) {
//         $data['image_apercu'] = $request->file('image_apercu')->store('evenements/apercu', 'public');
//     }

//     // Mise à jour des images de détail si envoyées
//     if ($request->hasFile('images')) {
//         $imagesDetails = [];
//         foreach ($request->file('images') as $image) {
//             $imagesDetails[] = $image->store('evenements/details', 'public');
//         }
//         $data['images_details'] = json_encode($imagesDetails);
//     }

//     $evenement->update($data);

//     return redirect()->route('evenements.index')->with('success', 'Événement mis à jour.');
// }


//     /**
//      * Remove the specified resource from storage.
//      */
//     public function destroy(Evenement $evenement)
// {
//     $evenement->delete();
//     return redirect()->route('evenements.index')->with('success', 'Événement supprimé.');
// }

// }
