ServerEvents.recipes(event => {
    // INFINITE PEBBLES >:D
    event.custom({
        type: "lychee:item_inside",
        item_in: {
            item: "minecraft:sand"
        },
        block_in: "minecraft:water",
        time: 10,
        post: [
            {
                type: "drop_item",
                item: "minecraft:clay"
            },
            {
                type: "execute",
                command: "playsound minecraft:entity.generic.splash block @a ~ ~ ~",
                hide: true
            }
        ]
    })

})