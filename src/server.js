//importando dependencia
const express = require('express')
const path = require('path')
const pages = require('./pages.js')
//iniciando o express
const server = express()
    //utilizar body do req
    server.use(express.urlencoded({ extended: true }))
//utilizando os arquivos estáticos
server.use(express.static('public'))

//configurando template engine
server.set('views', path.join(__dirname, "views"))
server.set('view engine', 'hbs')

//rotas da aplicação
server.get('/', pages.index)
server.get('/orphanage', pages.orphanage)
server.get('/orphanages', pages.orphanages)
server.get('/create-orphanage', pages.createOrphanage)
server.post('/save-orphanage', pages.saveOrphanage)

//ligando o servidor
server.listen(5500)