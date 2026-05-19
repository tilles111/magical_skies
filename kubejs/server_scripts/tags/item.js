ServerEvents.tags('item', event => {
    event.add('caupona:cereals', 'wizards_reborn:arcane_linen')
    event.add('caupona:wolfberries', 'ars_nouveau:sourceberry_bush')
    event.add('caupona:sourceberries', 'ars_nouveau:sourceberry_bush')

    // Lead or Iron tags
    event.add('forge:ingots/lead_or_iron_or_pewter', [
        '#forge:ingots/pewter',
        '#forge:ingots/lead',
        '#forge:ingots/iron'
    ])
    event.add('forge:nuggets/lead_or_iron_or_pewter', [
        '#forge:nuggets/pewter',
        '#forge:nuggets/lead',
        '#forge:nuggets/iron'
    ])
    event.add('forge:storage_blocks/lead_or_iron_or_pewter', [
        '#forge:storage_blocks/pewter',
        '#forge:storage_blocks/lead',
        '#forge:storage_blocks/iron'
    ])

    event.add('forge:plates/lead_or_iron', [
        '#forge:plates/lead',
        '#forge:plates/iron'
    ])

    //Spirit salt burning
    event.add('kubejs:calcination/sacred', 'malum:sacred_spirit')
    event.add('kubejs:calcination/wicked', 'malum:wicked_spirit')
    event.add('kubejs:calcination/arcane', 'malum:arcane_spirit')
    event.add('kubejs:calcination/eldritch', 'malum:eldritch_spirit')
    event.add('kubejs:calcination/aerial', [
        'minecraft:dandelion',
        'malum:aerial_spirit'
    ])
    event.add('kubejs:calcination/aqueous', [
        'minecraft:clay',
        'malum:aqueous_spirit'
    ])
    event.add('kubejs:calcination/earthen', [
        'minecraft:flint',
        'malum:earthen_spirit'
    ])
    event.add('kubejs:calcination/infernal', [
        '#minecraft:coals',
        'malum:infernal_spirit'
    ])
    event.add('kubejs:calcination/umbral', 'malum:umbral_spirit')

    // Ash Retagging
    event.remove('forge:dusts/ash', [
        'embers:ash'
    ])

    // Sinew Retagging
    event.remove('forge:string', [
        'biomancy:mob_sinew'
    ])

})