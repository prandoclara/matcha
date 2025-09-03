# Matcha

Application de rencontre (web) basée sur une architecture microservices.

## Stack technique

- **Backend** : Node.js + Express (microservices)
- **Frontend** : React
- **Base de données** : MySQL
- **Reverse proxy** : Nginx
- **Orchestration** : Docker Compose

## Structure du projet

```
matcha/
│
├── backend/
│   ├── services/
│   │   ├── auth/           # Microservice d'authentification
│   │   ├── user/           # Microservice gestion utilisateurs
│   │   └── match/          # Microservice gestion des matchs
│   └── shared/             # Code partagé (utils, middlewares, etc.)
│
├── frontend/               # Application React
│
├── nginx/                  # Config Nginx
│
├── docker-compose.yml      # Orchestration des services
├── README.md
└── .gitignore
```

## Lancement du projet

1. **Cloner le repo**
2. **Lancer la stack Docker** :
   ```sh
   docker-compose up --build
   ```
3. Accéder à l'application sur [http://localhost](http://localhost)

## Microservices

- **auth** : gestion de l'authentification
- **user** : gestion des utilisateurs
- **match** : gestion des matchs

Chaque microservice possède son propre dossier, Dockerfile, et fichier d'environnement.

## Frontend

- Application React (dossier `frontend/`)

## Nginx

- Reverse proxy pour router les requêtes vers les bons services

## Base de données

- PostgreSQL, persistée dans un volume Docker
