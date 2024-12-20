                                     *********Présentation de l'application*********

Tree Learning est une application qui permet à l'utilisateur de se connecter, consulter une liste de modules en utilisant un système d'authentification sécurisé
L'application comprend un frontend développé en React (avec TypeScript), un backend Symfony exposant une API sécurisée avec JWT, et une base de données PostgreSQL pour stocker les informations sur les modules



                                     *************Stack utilisée*************
Frontend

    React : Bibliothèque JavaScript pour construire l'interface utilisateur et React outer dom pour la navigation
    TypeScript : Superset de JavaScript pour ajouter un typage statique et améliorer la maintenabilité du code
    Redux Toolkit : Outil pour la gestion de l'état global de l'application, avec RTK Query pour la gestion des requêtes API
    Tailwind CSS : Framework CSS utilitaire pour créer des interfaces réactives et personnalisables rapidement
    Vite : Bundler de développement rapide pour React avec une configuration optimisée

Backend

    Symfony : Framework PHP pour créer l'API RESTful
    JWT (JSON Web Token) : Utilisé pour gérer l'authentification et la sécurité de l'application via des tokens
    PostgreSQL : Base de données relationnelle pour stocker les modules et les utilisateurs
    Docker : Utilisé pour containeriser l'application (backend, base de données), simplifiant le développement et la mise en production

Outils de développement

    Visual Studio Code : IDE utilisé pour le développement du frontend et du backend
    Git et GitHub : Outils de gestion de version et de collaboration pour le contrôle de version avec GitFlow
    Insomnia/Postman : Outils pour tester et interagir avec l'API
    

                                ***********ENPOINTS**********

*******Endpoint auth*******


L'endpoint auth sert à authentifier un utilisateur en lui permettant de se connecter à l'application 
En fournissant son mail et son mdp, l'utilisateur reçoit un token JWT qui lui donne accès aux fonctionnalités sécurisées

|Comment ça fonctionne ?

    Requête :
        L'endpoint utilise une requête POST envoyée à l'URL /login_check
        Les données nécessaires sont :
            email : l'adresse email de l'utilisateur
            password : son mot de passe

    Réponse :
        Si la connexion est réussie, le serveur renvoie un objet contenant un token :

    {
      "token": "eyJhbGciOiJ1..."
    }

    Ce token est utilisé pour prouver que l'utilisateur est bien connecté.

Utilisation du token :

    Ce token devra être envoyé dans chaque requête sécurisée via l’en-tête Authorization :

                Authorization: Bearer <token>

*******Endpoint modules*******
l'endpoint modules permet de recupérer touts les modules de la table module de la base de donnée

Voici un exemple de requête GET pour récupérer les modules à partir de l'API en utilisant l'endpoint getModules que nous avons défini

**Exemple de requête HTTP:
        GET http://localhost:8000/api/modules

Réponse attendue:
        Si l'API fonctionne correctement et qu'il y a des modules dans la base de données, la réponse serait quelque chose comme ceci :


  {
    "id": 1,
    "title": "Module 1",
    "description": "Description du module 1",
    "created_at": "2024-11-23T10:00:00Z"
  },
  

  ****************structure de la base de données****************
              
+------------------+       +-------------------+
|      user        |       |     module        |
+------------------+       +-------------------+
| id               |<-----+| id                |
| first_name       |       | title             |
| last_name        |       | description       |
| email            |       | created_at        |
| token_api        |       +-------------------+
| roles            |
| password         |
+------------------+


**************JWT autentification****************************

1*Requête de connexion :
    L'utilisateur soumet ses informations de connexion,à travers un formulaire de connexion sur l'application
    Cette demande est envoyée sous forme de requête POST vers l'API.

2*Validation des informations :
    L'API vérifie les informations soumises par l'utilisateur, en comparant les données soumises avec les données stockées dans la base de donnée et si les informations sont valides, l'API passee à l'étape suivante et génere le token personnel

3*Génération de JWT :
    Une fois la validation des informations réussie, le serveur génère un token JWT qui est signé numériquement pour garantir son intégrité et sa validité

3*Réponse avec JWT :
    Le serveur retourne le token JWT dans la réponse à l'utilisateur. Ce token peut être stocké dans localStorage du navigateur pour être utilisé lors de futures requêtes pour récuperer les modules

4*Requête sécurisée avec JWT :
    Lorsque l'utilisateur essaie d'accéder à des ressources protégées (par exemple des modules dans votre application), il inclut le token JWT dans l'en-tête de la requête sous la forme :

           Authorization: Bearer <token>.
           "cela permet au serveur de savoir que la requête est effectuée par un utilisateur authentifié"

5*Validation du token :
    A chaque requête sécurisée, le serveur vérifie le token JWT en le décodant et en vérifiant sa signature pour s'assurer qu'il n'a pas été altéré. Si le token est valide et non expiré, il est accepté et le serveur donne l'accès aux ressources protégées demandées

