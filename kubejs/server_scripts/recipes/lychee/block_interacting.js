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

    

    // Statue Crafting
    function statue_craft(output, input, aboveblock, belowblock, sound, id) {

        if (aboveblock == undefined) {
            aboveblock = '#wizards_reborn:arcane_lumos'
        }
        if (belowblock == undefined) {
            belowblock = 'minecraft:chiseled_stone_bricks'
        }
        if (sound == undefined) {
            sound = 'supplementaries:item.wrench.rotate'
        }
        if (id == undefined) {
            id = `kubejs:block_interacting/${output.path}_from_${input.path}_on_statue_between_${aboveblock.path}_and_${belowblock.path}`
        }
        var id_ghost = `${id}_ghost`
        
        // idk how good this is
        var abovepredicate = {}
        var belowpredicate = {}

        // Above and Below Blockpredicates
        if (aboveblock.startsWith('#')) {
            abovepredicate = {
                block: {
                    tag: aboveblock.substring(1)
                }
            }
        } else {
            abovepredicate = {
                block: {
                    blocks: [
                        aboveblock
                    ]
                }
            }
        }
        if (belowblock.startsWith('#')) {
            belowpredicate = {
                block: {
                    tag: belowblock.substring(1)
                }
            }
        } else {
            belowpredicate = {
                block: {
                    blocks: [
                        belowblock
                    ]
                }
            }
        }
        
        
        
        var directions = [
            'north',
            'east',
            'south',
            'west'
        ]

        for (let starting_direction = 0; starting_direction <= 3; starting_direction++) {
            
            // Statue post
            var statue_post = [
                {
                    type: 'add_item_cooldown',
                    s: 3.15
                }
            ]
            
            for (let i = 1; i <= 12; i++) {
                statue_post.push(
                    {
                        type: 'place',
                        block: {
                            blocks: [
                                'supplementaries:statue'
                            ],
                            state: {
                                facing: directions[(i + starting_direction) % 4]
                            }
                        }
                    },
                    {
                        type: 'execute',
                        command: `playsound ${sound} block @a ~ ~ ~ 1 ${(0.375 + 0.125*i)}`,
                    },
                    {
                        type: 'delay',
                        s: (1/i),
                    }
                )
            }
            
            statue_post.push(
                {
                    type: 'drop_item',
                    item: Item.of(output).id,
                    count: Item.of(output).count
                }
            )
            
            event.custom({
                type: 'lychee:block_interacting',
                item_in: Ingredient.of(input),
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
                                predicate: belowpredicate
                            }, {
                                type: 'location',
                                offsetY: 1,
                                predicate: abovepredicate
                            }, {
                                type: 'location',
                                predicate: {
                                    block: {
                                        blocks: ['supplementaries:statue'],
                                        state: {
                                            facing: directions[starting_direction]
                                        }
                                    }
                                }
                            }
                        ]
                    }],
                post: statue_post,
                hide_in_viewer: true
            }).id(`${id}_${directions[starting_direction]}`)
            
        }
                
        event.custom({
            type: 'lychee:block_interacting',
            item_in: Ingredient.of(input),
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
                            predicate: belowpredicate
                        }, {
                            type: 'location',
                            offsetY: 1,
                            predicate: abovepredicate
                        }
                    ]
                }],
                post: {
                    type: 'drop_item',
                    item: Item.of(output).id,
                    count: Item.of(output).count
                },
                ghost: true
            }).id(id_ghost)

    }

    

    // // Slate
    // event.custom({
    //     type: 'lychee:block_interacting',
    //     item_in: {
    //         item: 'kubejs:inert_slate'
    //     },
    //     block_in: 'supplementaries:statue',
    //     contextual: [
    //         {
    //         type: 'and',
    //         contextual: [
    //             {
    //                 type: 'is_sneaking'
    //             }, {
    //                 type: 'location',
    //                 offsetY: -1,
    //                 predicate: {
    //                     block: {
    //                         blocks: [
    //                             'minecraft:chiseled_stone_bricks'
    //                         ]
    //                     }
    //                 }
    //             }, {
    //                 type: 'location',
    //                 offsetY: 1,
    //                 predicate: {
    //                     block: {
    //                         tag: 'wizards_reborn:arcane_lumos'
    //                     }
    //                 }
    //             }
    //         ]
    //     }],
    //     post: statue_post_2
    //     //todo frog: make the statue spin and play the sound higher a few times :) also figure out why the sound isnt playing
    // }).id('kubejs:block_interacting/blankslate_from_sturdy_stone_on_statue_on_bedrock')

    statue_craft('bloodmagic:blankslate', 'kubejs:inert_slate')


})