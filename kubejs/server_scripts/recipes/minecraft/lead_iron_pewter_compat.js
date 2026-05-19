ServerEvents.recipes(event => {
    const ironLeadItems = [
        '#supplementaries:candle_holders',
        'decorative_blocks:chain',
        'minecraft:chain',
        'supplementaries:sconce_soul',
        'supplementaries:sconce',
        'minecraft:soul_lantern',
        'minecraft:lantern',
        'supplementaries:goblet',
        'architects_palette:tread_plate',
        'architects_palette:plating_block',
        'embers:tinker_hammer',
        'farmersdelight:skillet',
        'farmersdelight:cooking_pot',
        'caupona:situla',
        'minecraft:hopper',
        'supplementaries:cage',
        'minecraft:cauldron',
        'minecraft:anvil',
        'sawmill:sawmill',
        'minecraft:smithing_table',
        'minecraft:stonecutter',
        'quark:framed_glass'
    ]

    event.replaceInput(
        { output: ironLeadItems },
        '#forge:ingots/iron',
        '#forge:ingots/lead_or_iron_or_pewter'
    )
    event.replaceInput(
        { output: ironLeadItems },
        '#forge:ingots/lead',
        '#forge:ingots/lead_or_iron_or_pewter'
    )
    event.replaceInput(
        { output: ironLeadItems },
        '#forge:nuggets/iron',
        '#forge:nuggets/lead_or_iron_or_pewter'
    )
    event.replaceInput(
        { output: ironLeadItems },
        '#forge:nuggets/lead',
        '#forge:nuggets/lead_or_iron_or_pewter'
    )
    event.replaceInput(
        { output: ironLeadItems },
        '#forge:blocks/iron',
        '#forge:storage_blocks/lead_or_iron_or_pewter'
    )
    event.replaceInput(
        { output: ironLeadItems },
        '#forge:blocks/lead',
        '#forge:storage_blocks/lead_or_iron_or_pewter'
    )
})