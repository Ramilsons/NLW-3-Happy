const Database = require('./db')
const saveOrphanage = require('./saveOrphanage')
Database.then(async db => {


    //inserir dados na tabela
    await saveOrphanage(db, {
        lat: "-23.4364587",
        lng: "-47.0663934",
        name: "Lar das meninas",
        about: "Presta assistência a crianças de 10 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social",
        whatsapp: "7777777",
        images: [
            "https://images.unsplash.com/photo-1600712244180-7ef5e5c82cb5?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
            "https://images.unsplash.com/photo-1597385573259-d2d9f0b7135d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
        ].toString(),
        instructions: "Venha como se sentir a vontade e traga muito amor e carinho.",
        opening_hours: "Horário de visitas Das 18h até 8h",
        open_on_weekends: "1"

    })

    
    //deletar dado da tabela
    //console.log(await db.run("DELETE FROM orphanages WHERE id = '2'"))

    //consultar dados na tabela
    //const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    //console.log(selectedOrphanages)

    //consulta somente 1 um orphanato, pelo id
    //const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "1"')
    //console.log(orphanage)

})