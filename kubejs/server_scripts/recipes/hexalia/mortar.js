ServerEvents.recipes(event => {

    function mortar(output, inputs, id) {

        if (id == undefined) {
            let id_part = inputs.map(input => input.path)
            id = `kubejs:mortar/${id_part.join('_and_')}_to_${Item.of(output).id.split(':')[1]}`
        } // this is kind of cinge
        event.custom({
            type: 'hexalia:mortar_and_pestle',
            ingredients: inputs.map(input => Ingredient.of(input).toJson()),
            output: Item.of(output).toJson()
        }).id(id)

    }

    //Maybe a placeholder?
    mortar(
        'minecraft:gravel',
        [
            'minecraft:cobblestone'
        ]
    )

    mortar(
        Item.of('minecraft:gravel', 2),
        [
            'minecraft:cobblestone',
            'minecraft:cobblestone'
        ]
    )

    event.custom({
        type: "hexalia:mortar_and_pestle",
        ingredients: [
            {
                item: "minecraft:cobblestone"
            },
            {
                item: "minecraft:cobblestone"
            },
            {
                item: "minecraft:cobblestone"
            }
        ],
        output: {
            item: "minecraft:gravel",
            count: 3
        }
    })
    //Also maybe a placeholder?
    event.custom({
        type: "hexalia:mortar_and_pestle",
        ingredients: [
            {
                item: "minecraft:gravel"
            }
        ],
        output: {
            item: "minecraft:sand"
        }
    })
    event.custom({
        type: "hexalia:mortar_and_pestle",
        ingredients: [
            {
                item: "minecraft:gravel"
            },
            {
                item: "minecraft:gravel"
            }
        ],
        output: {
            item: "minecraft:sand",
            count: 2
        }
    })
    event.custom({
        type: "hexalia:mortar_and_pestle",
        ingredients: [
            {
                item: "minecraft:gravel"
            },
            {
                item: "minecraft:gravel"
            },
            {
                item: "minecraft:gravel"
            }
        ],
        output: {
            item: "minecraft:sand",
            count: 3
        }
    })
    
    event.custom({
        type: "hexalia:mortar_and_pestle",
        ingredients: [
            {
                item: "forbidden_arcanus:arcane_crystal"
            }
        ],
        output: {
            item: "forbidden_arcanus:arcane_crystal_dust"
        }
    })
    event.custom({
        type: "hexalia:mortar_and_pestle",
        ingredients: [
            {
                item: "forbidden_arcanus:arcane_crystal"
            },
            {
                item: "forbidden_arcanus:arcane_crystal"
            }
        ],
        output: {
            item: "forbidden_arcanus:arcane_crystal_dust",
            count: 2
        }
    })
    event.custom({
        type: "hexalia:mortar_and_pestle",
        ingredients: [
            {
                item: "forbidden_arcanus:arcane_crystal"
            },
            {
                item: "forbidden_arcanus:arcane_crystal"
            },
            {
                item: "forbidden_arcanus:arcane_crystal"
            }
        ],
        output: {
            item: "forbidden_arcanus:arcane_crystal_dust",
            count: 3
        }
    })

    // Arcane Ashes
    event.custom({
        type: "hexalia:mortar_and_pestle",
        ingredients: [
            {
                item: "forbidden_arcanus:arcane_crystal_dust"
            },
            {
                tag: "forge:dusts/ash"
            },
            {
                tag: "forge:dusts/ash"
            }
        ],
        output: Item.of('bloodmagic:arcaneashes', '{Damage:10}').toJson()
    })
})