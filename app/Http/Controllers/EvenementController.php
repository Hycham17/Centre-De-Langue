<?php

namespace App\Http\Controllers;

use App\Models\Evenement;
use Illuminate\Http\Request;

class EvenementController extends Controller
{
    public function index()
    {
        $evenements = Evenement::latest()->paginate(10);
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

