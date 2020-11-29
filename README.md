# API Hackathon

Cette API REST permet la gestion des données pour l'hackathon

## Installation

- Il faut dans un premier temps créer un fichier .env avec l'exemple fourni. En cas d'oubli seulement swagger ne sera pas fonctionnel.
- Lancer docker : ```docker-compose build``` puis ```docker-compose up```

## Fonctionnalité

- L'API sera disponible sur l'url : http://localhost:3000
- La documenation de l'API gérée par swagger sera disponible sur l'url : http://localhost:8080
- De la donnée sera automatiquement importé par mongo (users, schools) pour utiliser l'application directement.


## Composition de docker

- Container 1 : NODEJS + YARN + EXPRESSION
- Container 2 : MONGODB
- Contianer 3 : MONGODB pour l'importation de données
- Contianer 4 : SWAGGER-UI 

