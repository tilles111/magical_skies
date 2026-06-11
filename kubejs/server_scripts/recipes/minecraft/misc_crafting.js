ServerEvents.recipes(event => {

    // TODO frog: maybe add ids to these

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

    event.remove({id: 'hexalia:hex_focus'})
    event.shaped('hexalia:hex_focus', [
        '  A',
        ' B ',
        'C  '
    ], {
        A: '#forge:gems/arcane_crystal',
        B: 'bloodmagic:blankslate', // might switch for something mroe nature-y
        C: '#forge:rods/wooden' // if so, might replace with a twig instead
    })

    // Moss
    event.shapeless(
        Item.of('ecologics:surface_moss', 6),
        [
            'minecraft:moss_carpet'
        ]
    )
    event.remove({ id: 'quark:building/smelting/moss_paste'})
    event.shapeless(
        'quark:moss_paste',
        [
            'ecologics:surface_moss',
            'ecologics:surface_moss',
            'ecologics:surface_moss'
        ]
    )
    event.shapeless(
        Item.of('ecologics:surface_moss', 3),
        [
            'quark:moss_paste'
        ]
    )
    event.shapeless(
        'minecraft:moss_block',
        [
            'quark:moss_paste',
            'quark:moss_paste',
            'quark:moss_paste'
        ]
    )

    // frick the default compost recipe
    event.remove({id: 'minecraft:composter'})
    event.shaped('minecraft:composter', [
        'A A',
        'A A',
        'ABA'
    ], {
        A: '#minecraft:wooden_slabs',
        B: '#minecraft:planks'
    })

    // mortar
    event.remove({id: 'hexalia:mortar_and_pestle'})
    event.shaped('hexalia:mortar_and_pestle', [
        'A',
        'B'
    ], {
        A: 'twigs:pebble',
        B: 'minecraft:bowl'
    })

    // Petal Apoth
    event.replaceInput({id: '/botania:apothecary.*/'}, '#botania:petals', 'wizards_reborn:petals')

    // Clay Stuff
    event.remove({id: 'biomancy:crafting/clay_ball_from_stone_powder'})
    event.shapeless('minecraft:clay_ball', [
        'biomancy:stone_powder',
        'caupona:water',
        'biomancy:stone_powder'
    ])

    event.shapeless(Item.of('minecraft:clay_ball', 4), [
        'biomancy:stone_powder',
        'biomancy:stone_powder',
        'biomancy:stone_powder',
        'biomancy:stone_powder',
        'minecraft:water_bucket',
        'biomancy:stone_powder',
        'biomancy:stone_powder',
        'biomancy:stone_powder',
        'biomancy:stone_powder'
    ])

    event.shaped('minecraft:sand', [
        'AAA',
        'AAA',
        'AAA'
    ], {
        A: 'biomancy:stone_powder'
    })

    event.shaped('minecraft:gravel', [
        'ABA',
        'BAB',
        'ABA'
    ], {
        A: 'twigs:pebble',
        B: 'biomancy:stone_powder'
    })

    event.shapeless('minecraft:clay_ball', [
        'biomancy:stone_powder',
        '#kubejs:infinite_water_sources',
        'biomancy:stone_powder'
    ]).keepIngredient(Ingredient.of('#kubejs:infinite_water_sources'))

    event.shapeless(Item.of('minecraft:clay_ball', 4), [
        'biomancy:stone_powder',
        'biomancy:stone_powder',
        'biomancy:stone_powder',
        'biomancy:stone_powder',
        '#kubejs:infinite_water_sources',
        'biomancy:stone_powder',
        'biomancy:stone_powder',
        'biomancy:stone_powder',
        'biomancy:stone_powder'
    ]).keepIngredient(Ingredient.of('#kubejs:infinite_water_sources'))

})