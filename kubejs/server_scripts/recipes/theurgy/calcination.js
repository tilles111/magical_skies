ServerEvents.recipes(event => {
    // event.remove({type: 'theurgy:calcination'})
    // unnecessary - all recipes nuked by nukelist

    malum_spirits.forEach(spirit => {
        event.custom({
            type: 'theurgy:calcination',
            ingredient: {
                tag: `kubejs:calcination/${spirit}`
            },
            result: { item: `kubejs:${spirit}_salt` },
            time: 200
        }).id(`kubejs:calcination/${spirit}_salt`)
    })
    
})