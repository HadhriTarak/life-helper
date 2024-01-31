db = db.getSiblingDB('life-helper-db');
db.createUser(
  {
    user: 'root',
    pwd: 'root',
    roles: [{ role: 'readWrite', db: 'users_db' }],
  },
);