ServerEvents.recipes(event => {
    //Maybe a placeholder?
    event.custom({
        type: "hexalia:mortar_and_pestle",
        ingredients: [
            {
                item: "minecraft:cobblestone"
            }
        ],
        output: {
            item: "minecraft:gravel"
        }
    })
    event.custom({
        type: "hexalia:mortar_and_pestle",
        ingredients: [
            {
                item: "minecraft:cobblestone"
            },
            {
                item: "minecraft:cobblestone"
            }
        ],
        output: {
            item: "minecraft:gravel",
            count: 2
        }
    })
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
        output: {
            item: 'bloodmagic:arcaneashes'
        }
    })
})