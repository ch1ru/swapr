db.createUser({
  user: 'admin',
  pwd: 'secret',
  roles: [
    {
      role: 'readWrite',
      db: 'userdb',
    },
  ],
});
db = new Mongo().getDB("userdb");
console.log("new db");
db.createCollection('users', { capped: false });