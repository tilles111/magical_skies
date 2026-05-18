ServerEvents.recipes(event => {
    event.remove({type: 'theurgy:calcination'})
    event.custom({
        type: 'theurgy:calcination',
        ingredient: {
            tag: "kubejs:calcination/sacred"
        },
        result: { item: 'kubejs:sacred_salt' },
        time: 200
    })
    event.custom({
        type: 'theurgy:calcination',
        ingredient: {
            tag: "kubejs:calcination/wicked"
        },
        result: { item: 'kubejs:wicked_salt' },
        time: 200
    })
    event.custom({
        type: 'theurgy:calcination',
        ingredient: {
            tag: "kubejs:calcination/arcane"
        },
        result: { item: 'kubejs:arcane_salt' },
        time: 200
    })
    event.custom({
        type: 'theurgy:calcination',
        ingredient: {
            tag: "kubejs:calcination/eldritch"
        },
        result: { item: 'kubejs:eldritch_salt' },
        time: 200
    })
    event.custom({
        type: 'theurgy:calcination',
        ingredient: {
            tag: "kubejs:calcination/aerial"
        },
        result: { item: 'kubejs:aerial_salt' },
        time: 200
    })
    event.custom({
        type: 'theurgy:calcination',
        ingredient: {
            tag: "kubejs:calcination/aqueous"
        },
        result: { item: 'kubejs:aqueous_salt' },
        time: 200
    })
    event.custom({
        type: 'theurgy:calcination',
        ingredient: {
            tag: "kubejs:calcination/earthen"
        },
        result: { item: 'kubejs:earthen_salt' },
        time: 200
    })
    event.custom({
        type: 'theurgy:calcination',
        ingredient: {
            tag: "kubejs:calcination/infernal"
        },
        result: { item: 'kubejs:infernal_salt' },
        time: 200
    })
    event.custom({
        type: 'theurgy:calcination',
        ingredient: {
            tag: "kubejs:calcination/umbral"
        },
        result: { item: 'kubejs:umbral_salt' },
        time: 200
    })
})