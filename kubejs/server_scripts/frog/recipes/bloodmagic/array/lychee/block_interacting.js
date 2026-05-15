ServerEvents.recipes(event => {

    // Volatile Arcanum stuff
    event.custom({
        type: "lychee:block_interacting",
        item_in: {
            item: "minecraft:flint"
        },
        block_in: {
            tag: "wizards_reborn:arcane_lumos"
        },
        post: [
            {
                type: "drop_item",
                item: "forbidden_arcanus:arcane_crystal"
            },
            {
                type: "execute",
                command: "playsound wizards_reborn:wissen_crystallizer_end block @a ~ ~ ~ 0.75 1.5",
                hide: true
            }
        ]
    }) // TODO frog: add sound here // I solved it :) - Tilles

})