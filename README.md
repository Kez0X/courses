# Site cours

## Variables env

> Créer un fichier .env et suivre la documentation de dotenv [https://www.npmjs.com/package/dotenv]

## Organisation bdd

```
root
 - students
  - studentID
  - createDate
  - name
  - email
  - psw
  - pswsalt
  - enabled
```

- students : table des profils étudiants
  - studentID : identifiant unique pour chaque étudiant (String PRIMARY KEY)
  - createDate : date de création du compte
  - name : Nom de l'étudiant (String, max 100 caractères)
  - email : Email unique pour chaque étudiant (String, max 100 caractères)
  - psw : Mot de passe du compte (HASH, max 25 caractères de longueur)
  - pswsalt : Caractères supplémentaire pour garantir des hash uniques
  - enabled : Statut du compte activé/desactivé (Bool, défaut 1)

### Commande de création de la table

```sql
create table
  `students` (
    `studentID` int unsigned not null auto_increment primary key,
    `created_at` timestamp not null default CURRENT_TIMESTAMP,
    `name` varchar(255) not null,
    `email` varchar(255) not null,
    `psw` LINESTRING not null,
    `pswsalt` LINESTRING not null,
    `enabled` BOOL not null default 1
  );
```