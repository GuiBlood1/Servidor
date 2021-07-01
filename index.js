const { application } = require('express')
const express = require('express')
const servidor = express()
const porta = 3000
var session = require('express-session')
const bodyParser = require('body-parser')
var login = "admin"
var senha = "123456"

servidor.use(session({secret:'ifdsjjk55sd4s55'}))
servidor.use(bodyParser.urlencoded({extended:true}))

servidor.set('views engine','ejs')

servidor.get('/',(req,res)=>{
    if(req.session.login ){
        res.render('logado.ejs')
    }else{
        res.render('index.ejs')
    }
    res.render('principal.ejs')
})

servidor.post('/',(req,res)=>{
    if(req.body.senha == senha && req.body.login == login){
        req.session.login = login
    }
    console.log(req.body.login)
    res.render('indexjs')
})

servidor.listen(porta)