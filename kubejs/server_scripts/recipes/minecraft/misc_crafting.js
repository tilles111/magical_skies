ServerEvents.recipes(event => {
    event.remove({id: 'minecraft:furnace'})
    event.remove({id: 'quark:building/crafting/furnaces/mixed_furnace'})
    event.remove({id: 'quark:building/crafting/furnaces/cobblestone_furnace'})
    event.remove({id: 'quark:building/crafting/furnaces/deepslate_furnace'})
    event.remove({id: 'quark:building/crafting/furnaces/blackstone_furnace'})

    event.shapeless('9x forbidden_arcanus:arcane_crystal_dust_speck', ['forbidden_arcanus:arcane_crystal_dust'])
    event.shapeless('kubejs:tin_ingot', ['9x #forge:nuggets/tin'])
    event.shapeless('kubejs:bronze_ingot', ['9x #forge:nuggets/bronze'])
    event.shapeless('9x #forge:nuggets/tin', ['kubejs:tin_ingot'])
    event.shapeless('9x #forge:nuggets/bronze', ['kubejs:bronze_ingot'])

    event.shaped('minecraft:furnace',[
        'CCC',
        'LAL',
        'CSC'
    ],{
        C: 'minecraft:cobblestone',
        L: 'minecraft:clay',
        A: '#forge:gems/arcane_crystal',
        S: '#caupona:stoves'
    })
    event.shaped('quark:deepslate_furnace',[
        'CCC',
        'LAL',
        'CSC'
    ],{
        C: 'minecraft:cobbled_deepslate',
        L: 'minecraft:clay',
        A: '#forge:gems/arcane_crystal',
        S: '#caupona:stoves'
    })
    event.shaped('quark:blackstone_furnace',[
        'CCC',
        'LAL',
        'CSC'
    ],{
        C: 'minecraft:blackstone',
        L: 'minecraft:clay',
        A: '#forge:gems/arcane_crystal',
        S: '#caupona:stoves'
    })
})