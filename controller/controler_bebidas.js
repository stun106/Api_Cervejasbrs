const conn = require('../models/models_cervejas')

const createTable = () =>{
    conn.db.run(`CREATE TABLE IF NOT EXISTS cervejas(
    id INTEGER PRIMARY KEY, 
    bebida VARCHAR(50) NOT NULL,
    valor FLOAT NOT NULL,
    descricao VARCHAR(255))`, err =>{
        if(err){
          console.log(err.message)  
        }
        console.log("database conected")
    })
} 

const insert = (req,res) =>{
    const {bebida, valor, descricao } = req.body
            conn.db.run(`INSERT INTO cervejas (bebida, valor, descricao) VALUES (?,?,?)`,[bebida,Number(valor),descricao], err =>{
        if(err){
            console.log(err.message)
        }else{
            res.status(201).json(`${bebida} registrada com sucesso!`)
        }
    });
}

const selectAll = (req,res) =>{
    conn.db.all("SELECT * FROM cervejas",[],(err,rows)=>{
         if(err){
            return res.status(500).json({error:err.message})
        }
        res.status(201).json(rows)
    })   
} 

const selectForName = (req,res) =>{
    const search = req.query.name.toLowerCase()
    conn.db.all( `SELECT * FROM cervejas where LOWER(bebida) LIKE '${search}'`,[],(err,row) =>{
        if(err){
            res.status(500).json({erro:err.message})
        }else{
            console.log(row)
          res.status(201).json(row)  
        }
        
    })
}

const deleteForId = (req,res) =>{
    const id = Number(req.query.id)
    conn.db.run(`DELETE FROM cervejas WHERE  id = ${id}`,[],(err,row) =>{
        if(err){
            res.status(500).json({erro:err.message})
        }else{
            res.status(200).json(`bebida deletada com sucesso!`)
        }
    } )
}

module.exports = {
    createTable,
    insert,
    selectAll,
    selectForName,
    deleteForId
}