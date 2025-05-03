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
            'title_fr' => 'required|string',
            'title_en' => 'required|string',
            'title_ar' => 'required|string',
            'description_fr' => 'required|string',
            'description_en' => 'required|string',
            'description_ar' => 'required|string',
            'date' => 'required|date',
'images.*' => 'image|mimes:jpeg,png,jpg,gif,svg|',
            // max:2048
        ]);

        // Initialisation du tableau pour stocker les images
        $imagesArray = [];

        // Vérification de la présence de fichiers image
        if ($request->hasFile('images')) {
            foreach ($request->file('images') as $image) {
                // Stocker l'image et récupérer son chemin
                $path = $image->store('evenements', 'public');
                $imagesArray[] = $path;  // Ajouter le chemin à la liste
            }
        }

        // Vérification que des images ont été téléchargées
        if (empty($imagesArray)) {
            return back()->with('error', 'Aucune image sélectionnée.');
        }

        // Ajouter les images au tableau de données
        $data['images'] = $imagesArray;

        // Création de l'événement dans la base de données
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
            'title_fr' => 'required|string',
            'title_en' => 'required|string',
            'title_ar' => 'required|string',
            'description_fr' => 'required|string',
            'description_en' => 'required|string',
            'description_ar' => 'required|string',
            'date' => 'required|date',
            'images.*' => 'image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        if ($request->hasFile('images')) {
            $imagesArray = [];
            foreach ($request->file('images') as $image) {
                $imagesArray[] = $image->store('evenements', 'public');
            }
            $data['images'] = $imagesArray;
        }

        $evenement->update($data);

        return redirect()->route('evenements.index')->with('success', 'Événement mis à jour.');
    }

    public function show(Evenement $evenement)
    {
        return view('evenements.show', compact('evenement'));
    }

    public function destroy(Evenement $evenement)
    {
        $evenement->delete();
        return redirect()->route('evenements.index')->with('success', 'Événement supprimé.');
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
