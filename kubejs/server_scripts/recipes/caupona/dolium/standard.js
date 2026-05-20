ServerEvents.recipes(event => {
    event.custom({
        type: "caupona:dolium",
        density: 0.0,
        items: [
            {
                item : {
                    item: 'forbidden_arcanus:arcane_crystal_dust_speck'
                }
            }
        ],
        fluid: "theurgy:sal_ammoniac",
        amount: 1000,
        keepInfo: false,
        output: {
            type: "forge:nbt",
            count: 1,
            item: "theurgy:sal_ammoniac_crystal"
        }
    }).id('kubejs:dolium/sal_ammoniac')

    event.custom({
        type: "caupona:dolium",
        density: 0.0,
        items: [
            {
                count: 2,
                item : {
                    item: 'theurgy:alchemical_sulfur_tin'
                }
            },
            {
                item : {
                    item: 'forbidden_arcanus:arcane_crystal_dust_speck'
                }
            }
        ],
        fluid: "wizards_reborn:alchemy_oil",
        amount: 250,
        keepInfo: false,
        output: {
            type: "forge:nbt",
            count: 18,
            item: "kubejs:tin_nugget"
        }
    }).id('kubejs:dolium/sulfur_solidification/tin')
    event.custom({
        type: "caupona:dolium",
        density: 0.0,
        items: [
            {
                count: 2,
                item : {
                    item: 'theurgy:alchemical_sulfur_lead'
                }
            },
            {
                item : {
                    item: 'forbidden_arcanus:arcane_crystal_dust_speck'
                }
            }
        ],
        fluid: "wizards_reborn:alchemy_oil",
        amount: 250,
        keepInfo: false,
        output: {
            type: "forge:nbt",
            count: 18,
            item: "eidolon:lead_nugget"
        }
    }).id('kubejs:dolium/sulfur_solidification/lead')
    event.custom({
        type: "caupona:dolium",
        density: 0.0,
        items: [
            {
                count: 2,
                item : {
                    item: 'theurgy:alchemical_sulfur_copper'
                }
            },
            {
                item : {
                    item: 'forbidden_arcanus:arcane_crystal_dust_speck'
                }
            }
        ],
        fluid: "wizards_reborn:alchemy_oil",
        amount: 250,
        keepInfo: false,
        output: {
            type: "forge:nbt",
            count: 18,
            item: "malum:copper_nugget"
        }
    }).id('kubejs:dolium/sulfur_solidification/copper')
    
    event.custom({
        type: "caupona:dolium",
        density: 0.0,
        items: [
            {
                item : {
                    item: 'minecraft:wheat_seeds'
                }
            }
        ],
        fluid: "kubejs:sourceberry_stew",
        amount: 500,
        keepInfo: false,
        output: {
            type: "forge:nbt",
            count: 1,
            item: "wizards_reborn:arcane_linen_seeds"
        }
    }).id('kubejs:dolium/arcane_linen')

    event.custom({
        type: "caupona:dolium",
        density: 0.0,
        items: [
            {
                count: 3,
                item : {
                    item: 'minecraft:gravel'
                }
            }
        ],
        fluid: "kubejs:sourceberry_stew",
        amount: 500,
        keepInfo: false,
        output: {
            type: "forge:nbt",
            count: 9,
            item: "eidolon:lead_nugget"
        }
    }).id('kubejs:dolium/lead_leeching')
})