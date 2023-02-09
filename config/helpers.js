const Mysqli = require('mysqli');

let conn = new Mysqli({
    Host: 'localhost', // IP/domain name
    port: 3304, // port, default 3304
    user: 'root', // username
    passwd: 'root123', // password
    db: 'estore'
});

let db = conn.emit(false, '');

module.exports = {
    database: db
};
