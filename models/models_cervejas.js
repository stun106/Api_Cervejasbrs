const sqlite3 = require("sqlite3").verbose()

const db = new sqlite3.Database("./db/deposito.sqlite", err =>{
    if(err){
        console.log(err.message)
    }
})

module.exports = { db }

