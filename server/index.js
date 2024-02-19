import express from "express";
import mysql from "mysql";


// const express = require("express");
const app = express();
const db = mysql.createConnection({
    host: "localhost",
    user: "nico",
    password: "1212",
    database: "test"
})

app.get("/", (req,res)=>{
    res.json("connected from the backend")
})


app.listen(3001,()=>{
    console.log("corriendo en el puerto 3001")
})

app.get("/usuarios" , (req,res)=>{
    const q = "SELECT * FROM usuarios"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data);
    })
})


// {"code":"PROTOCOL_ENQUEUE_AFTER_FATAL_ERROR","fatal":false}


db.connect(function(err){
    if (err) {
        throw err;
    }
    console.log('Conexión exitosa a la base de datos');
});
db.end();

//CONECCTION WITH THE DB
// const db = mysql.createConnection({
// 	host: "localhost",
// 	database: "usuarios_crud",
// 	user: "root",
// 	password: "password"
// })

// app.get("/postUser" , (req, res) =>{
//     const sqlInsert = "ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';";
//     db.query(sqlInsert , (err, result) =>{
//         res.send("hello word!")
//     })

// })


// CONECCTION PORT
// app.get("/postUser" , (req, res) =>{
//     const sqlInsert = "INSERT INTO `usuarios` (`id`, `Nombre`, `Apellido`, `Edad`) VALUES ('2', '1', '1', '1');";
//     db.query(sqlInsert , (err, result) =>{
//         res.send("hello word!")
//     })
// })


//PETICION DE GUARDAR
// app.post("/create", (req,res)=>{
//     const nombre = req.body.nombre;
//     const apellido = req.body.apllido;
//     const edad = req.body.edad;
//     const ciudad = req.body.ciudad;
//     const email = req.body.email;

//     //HERE OPPERATING THE DB
//     db.query('INSERT INTO usuarios(nombre,apellido,edad,ciudad,email) VALUES(?,?,?,?,?)',[nombre,apellido,edad,ciudad,email],(err,result)=>{
//         if(err){
//             console.log(err)
//         }else{
//             res.send("empleado registrado exitosamente")
//         }
//     });

// });








