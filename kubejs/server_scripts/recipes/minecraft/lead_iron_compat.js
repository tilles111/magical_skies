ServerEvents.recipes(event => {
    const ironLeadItems = [
        '#supplementaries:candle_holders',
        'decorative_blocks:chain', 'minecraft:chain', 'supplementaries:sconce_soul', 'supplementaries:sconce', 'minecraft:soul_lantern', 'minecraft:lantern', 'supplementaries:goblet', 'architects_palette:tread_plate', 'architects_palette:plating_block', 'embers:tinker_hammer', Item.of('farmersdelight:skillet', '{Damage:0}'), 'farmersdelight:cooking_pot', 'caupona:situla', 'minecraft:hopper', 'supplementaries:cage', 'minecraft:cauldron', 'minecraft:anvil', 'sawmill:sawmill', 'minecraft:smithing_table', 'minecraft:stonecutter', 'quark:framed_glass'
    ]
    event.replaceInput(
        { output: ironLeadItems },
        'minecraft:iron_ingot',
        '#forge:ingots/lead_or_iron'
    )
    event.replaceInput(
        { output: ironLeadItems },
        'minecraft:iron_nugget',
        '#forge:nuggets/lead_or_iron'
    )
    event.replaceInput(
        { output: ironLeadItems },
        'minecraft:iron_block',
        '#forge:storage_blocks/lead_or_iron'
    )
})