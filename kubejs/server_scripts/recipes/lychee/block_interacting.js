ServerEvents.recipes(event => {

    // INFINITE PEBBLES >:D
    event.custom({
        type: 'lychee:block_interacting',
        contextual: {
            type: 'is_sneaking'
        },
        item_in: {
            item: 'air'
        },
        block_in: 'minecraft:bedrock',
        post: [
            {
                type: 'drop_item',
                item: 'twigs:pebble'
            },
            {
                type: 'execute',
                command: 'playsound minecraft:block.stone.hit block @a ~ ~ ~ 0.75 1.5',
                hide: true
            }
        ]
    }).id('kubejs:block_interacting/pebble_from_air_on_bedrock')

    // Volatile Arcanum stuff
    event.custom({
        type: 'lychee:block_interacting',
        item_in: {
            item: 'minecraft:flint'
        },
        block_in: {
            tag: 'wizards_reborn:arcane_lumos'
        },
        post: [
            {
                type: 'drop_item',
                item: 'forbidden_arcanus:arcane_crystal'
            },
            {
                type: 'execute',
                command: 'playsound wizards_reborn:wissen_crystallizer_end block @a ~ ~ ~ 0.75 1.5',
                hide: true
            }
        ]
    }).id('kubejs:block_interacting/arcane_crystal_from_flint_on_arcane_lumos')

    // Slate
    event.custom({
        type: 'lychee:block_interacting',
        item_in: {
            item: 'quark:sturdy_stone'
        },
        block_in: 'supplementaries:statue',
        contextual: [
            {
            type: 'and',
            contextual: [
                {
                    type: 'is_sneaking'
                }, {
                    type: 'location',
                    offsetY: -1,
                    predicate: {
                        block: {
                            blocks: [
                                'minecraft:bedrock'
                            ]
                        }
                    }
                }
            ]
        }],
        post: [
            {
                type: 'drop_item',
                item: 'bloodmagic:blankslate'
            },
            {
                type: 'execute',
                command: '/playsound supplementaries:item.wrench.rotate block @a ~ ~ ~ 1 0.5',
                hide: true
            }
        ] //todo frog: make the statue spin and play the sound higher a few times :) also figure out why the sound isnt playing
    }).id('kubejs:block_interacting/blankslate_from_sturdy_stone_on_statue_on_bedrock')

})