<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400" alt="Laravel Logo"></a></p>

<p align="center">
<a href="https://github.com/laravel/framework/actions"><img src="https://github.com/laravel/framework/workflows/tests/badge.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/dt/laravel/framework" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/v/laravel/framework" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/l/laravel/framework" alt="License"></a>
</p>

## About Laravel

Laravel is a web application framework with expressive, elegant syntax. We believe development must be an enjoyable and creative experience to be truly fulfilling. Laravel takes the pain out of development by easing common tasks used in many web projects, such as:

- [Simple, fast routing engine](https://laravel.com/docs/routing).
- [Powerful dependency injection container](https://laravel.com/docs/container).
- Multiple back-ends for [session](https://laravel.com/docs/session) and [cache](https://laravel.com/docs/cache) storage.
- Expressive, intuitive [database ORM](https://laravel.com/docs/eloquent).
- Database agnostic [schema migrations](https://laravel.com/docs/migrations).
- [Robust background job processing](https://laravel.com/docs/queues).
- [Real-time event broadcasting](https://laravel.com/docs/broadcasting).

Laravel is accessible, powerful, and provides tools required for large, robust applications.

## Learning Laravel

Laravel has the most extensive and thorough [documentation](https://laravel.com/docs) and video tutorial library of all modern web application frameworks, making it a breeze to get started with the framework.

You may also try the [Laravel Bootcamp](https://bootcamp.laravel.com), where you will be guided through building a modern Laravel application from scratch.

If you don't feel like reading, [Laracasts](https://laracasts.com) can help. Laracasts contains thousands of video tutorials on a range of topics including Laravel, modern PHP, unit testing, and JavaScript. Boost your skills by digging into our comprehensive video library.

## Laravel Sponsors

We would like to extend our thanks to the following sponsors for funding Laravel development. If you are interested in becoming a sponsor, please visit the [Laravel Partners program](https://partners.laravel.com).

### Premium Partners

- **[Vehikl](https://vehikl.com/)**
- **[Tighten Co.](https://tighten.co)**
- **[WebReinvent](https://webreinvent.com/)**
- **[Kirschbaum Development Group](https://kirschbaumdevelopment.com)**
- **[64 Robots](https://64robots.com)**
- **[Curotec](https://www.curotec.com/services/technologies/laravel/)**
- **[Cyber-Duck](https://cyber-duck.co.uk)**
- **[DevSquad](https://devsquad.com/hire-laravel-developers)**
- **[Jump24](https://jump24.co.uk)**
- **[Redberry](https://redberry.international/laravel/)**
- **[Active Logic](https://activelogic.com)**
- **[byte5](https://byte5.de)**
- **[OP.GG](https://op.gg)**

## Contributing

Thank you for considering contributing to the Laravel framework! The contribution guide can be found in the [Laravel documentation](https://laravel.com/docs/contributions).

## Code of Conduct

In order to ensure that the Laravel community is welcoming to all, please review and abide by the [Code of Conduct](https://laravel.com/docs/contributions#code-of-conduct).

## Security Vulnerabilities

If you discover a security vulnerability within Laravel, please send an e-mail to Taylor Otwell via [taylor@laravel.com](mailto:taylor@laravel.com). All security vulnerabilities will be promptly addressed.

## License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
PrjCLC/

//////////////////////////////////
# 🌍 Centre de Langue et de Communication — Site Web Multilingue

## 📌 Description

Ce projet est un site web multilingue (🇫🇷 Français, 🇬🇧 Anglais, 🇲🇦 Arabe) développé pour un centre de langue et de communication. Il est divisé en deux parties :

* **Frontend** (React.js + Vite)
* **Backend** (Laravel + Blade + Breeze)

Le site présente :

* Les objectifs, missions et valeurs du centre
* Ses services : langues, soutien scolaire, bureautique, alphabétisation, coaching scolaire, développement personnel, sorties éducatives, activités ludiques, etc.
* Les événements organisés
* La démarche d’inscription
* Un formulaire de contact
* Un système d’abonnement à la newsletter
* Les horaires de travail

## 👥 Utilisateurs

* **Visiteur** : Peut naviguer librement, voir les services, les événements, envoyer un message via le formulaire de contact, et s’abonner à la newsletter.
* **Administrateur** (accès privé) : Dispose d’un espace backend pour :

  * Gérer les événements
  * Lire les messages de contact
  * Gérer les abonnés

## 🧭 Tableau de bord (Admin)

L’administrateur dispose d’un tableau de bord sécurisé qui affiche les statistiques suivantes :

* 🔔 Le **nombre total de messages** reçus via le formulaire de contact.
* 📬 Le **nombre d’abonnés** à la newsletter.
* 📅 Le **nombre total d’événements** enregistrés dans la plateforme.

> Cette interface est uniquement accessible à l’administrateur authentifié. Elle est invisible au public.

## 🧰 Technologies utilisées

### Frontend

* React.js
* Vite
* Tailwind CSS

### Backend

* Laravel
* Blade
* Laravel Breeze (authentification de l’admin uniquement)
* MySQL (via XAMPP)

### Autres outils

* Node.js / npm
* Composer

## 🔧 Pré-requis

* PHP >= 8.x
* Composer
* Laravel
* Node.js
* XAMPP (ou tout autre environnement MySQL local)

## 🚀 Installation du projet

### 1. Cloner le projet

```bash
# Cloner le frontend
git clone https://github.com/Hycham17/CentreDuLangue.git

### 2. Installation côté backend

```bash
composer install
cp .env.example .env
php artisan key:generate
npm run dev

Configuration base de données dans le fichier .env
DB_DATABASE=CLC1
DB_USERNAME=root
DB_PASSWORD=

php artisan migrate
npm install && npm run build
```

### 3. Installation côté frontend

```bash
cd frontend
npm install
npm run dev
```

### 4. Lancer le backend

```bash
php artisan serve
```

## 🔗 Liaison frontend/backend

* Le frontend utilise `fetch` pour communiquer avec le backend Laravel via API (CORS activé).
* Structure du projet : `backend/` contient Laravel, `frontend/` contient React.

## 🔐 Authentification

* L’authentification est disponible uniquement pour l’admin via **Laravel Breeze** (login uniquement, pas d’inscription).

## 🧪 Commandes utiles

* Générer le fichier `.env` :

```bash
cp .env.example .env
```

* Lancer les migrations pour créer les tables :

```bash
php artisan migrate
```

## ✅ Fonctionnalités terminées

* Multilinguisme (AR/FR/EN)
* Affichage dynamique des services et événements
* Formulaire de contact fonctionnel
* Système d’abonnement à la newsletter
* Tableau de bord admin sécurisé
* Authentification admin (login uniquement)
* Connexion frontend/backend via API (CORS)

## 📁 Structure globale

```
backend/
│
├── frontend/        # React + Vite + Tailwind CSS
│
│
│
└── README.md
```

---

> Ce projet a été réalisé dans un cadre pédagogique pour simuler un vrai site professionnel pour un centre linguistique.

