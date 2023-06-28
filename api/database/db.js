//importando o sqlite async
const Databasse = require('sqlite-async')


function execute(db){
    return db.exec(` 
        CREATE TABLE IF NOT EXISTS orphanages (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            lat TEXT,
            lng TEXT,
            name TEXT,
            about TEXT,
            whatsapp TEXT,
            images TEXT,
            instructions TEXT,
            opening_hours TEXT,
            open_on_weekends TEXT
        );
    `)
}

module.exports = Databasse.open(__dirname + '/database.sqlite').then(execute) //o resultado de tudo isso é o db
