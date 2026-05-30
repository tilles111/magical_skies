ServerEvents.recipes(event => {

    function array(output, baseinput, addedinput, texture) {

        if (texture == undefined) {texture = 'sunarray'}
        event.custom({
            'type': 'bloodmagic:array',
            'output': Item.of(output).toJson(),
            'baseinput': Ingredient.of(baseinput).toJson(),
            'addedinput': Ingredient.of(addedinput).toJson(),
            'texture': `bloodmagic:textures/models/alchemyarrays/${texture}.png`
        }).id(`kubejs:array/${output.path}_from_${baseinput.path}_and_${addedinput.path}`)

    }

    array( // i "shortened" it but idk if it is good lol
        Item.of('ars_elemental:manipulation_caster_tome',
            '{' + 
                'RepairCost:0,' +
                '"ars_nouveau:caster": {' +
                    'current_slot:0,' +
                    'flavor:"",' + 
                    'hidden_recipe:"",' + 
                    'is_hidden:0b,' + 
                    'spell_count:1,' + 
                    'spells: {' + 
                        'spell0: {' + 
                            'name:"Crafting Table of Contents",' + 
                            'recipe: {' + 
                                'part0:"ars_nouveau:glyph_self",' + 
                                'part1:"ars_nouveau:glyph_craft",' + 
                                'size:2' + 
                            '},' + 
                            'sound: {' +
                                'pitch:1.0f,' + 
                                'soundTag:{id:"ars_nouveau:fire_family"},' + 
                                'volume:1.0f' + 
                            '},' + 
                            'spellColor: {' + 
                                'b:255,' +
                                'g:137,' + 
                                'r:1,' + 
                                'type:"ars_nouveau:rainbow"' + 
                            '}' + 
                        '}' + 
                    '}' + 
                '},' + 
                'display: {' + 
                    'Name:\'{"text":"Crafting Table of Contents"}\'' +
                '}' + 
            '}'
        ),
        'minecraft:book',
        'minecraft:crafting_table'
    )

    array(
        Item.of('ars_elemental:earth_caster_tome',
            '{' + 
                'RepairCost:0,' + 
                '"ars_nouveau:caster": {' +
                    'current_slot:0,' + 
                    'flavor:"",' + 
                    'hidden_recipe:"",' + 
                    'is_hidden:0b,' + 
                    'spell_count:1,' + 
                    'spells: {' + 
                        'spell0: {' + 
                            'name:"Deforest Lumps",' + 
                            'recipe: {' + 
                                'part0:"ars_elemental:glyph_arc_projectile",' + 
                                'part1:"ars_nouveau:glyph_fell",' + 
                                'size:2' + 
                            '},' + 
                            'sound: {' + 
                                'pitch:1.0f,' + 
                                'soundTag:{id:"ars_nouveau:fire_family"},' + 
                                'volume:1.0f' + 
                            '},' + 
                            'spellColor: {' + 
                                'b:50,' + 
                                'g:255,' + 
                                'r:50,' + 
                                'type:"ars_nouveau:constant"' + 
                            '}' + 
                        '}' + 
                    '}' + 
                '},' + 
                'display: {' + 
                    'Name:\'{"text":"Deforest Lumps"}\'' + 
                '}' + 
            '}'
        ),
        'minecraft:book',
        'kubejs:slate_axe' // maybe higher tier axe?
    )

    array(Item.of('kubejs:inert_slate', 2), 'minecraft:stone', '#forge:dusts/arcane_crystal')

    // Sigil Rebalancing
    event.remove({id: 'bloodmagic:array/growthsigil'})
    array('bloodmagic:growthsigil', 'bloodmagic:reagentgrowth', 'bloodmagic:blankslate', 'growthsigil')

    // Flowers from moss and dye
    array('minecraft:lily_of_the_valley', '#forge:dyes/white', 'ecologics:surface_moss')
    array('minecraft:oxeye_daisy', '#forge:dyes/light_gray', 'ecologics:surface_moss')
    // idk about gray lol, no flowers curretnly craft into it
    array('hexalia:nightshade_bush', '#forge:dyes/black', 'ecologics:surface_moss')
    // ditto brown
    array('minecraft:poppy', '#forge:dyes/red', 'ecologics:surface_moss')
    array('hexalia:dahlia', '#forge:dyes/orange', 'ecologics:surface_moss')
    array('forbidden_arcanus:yellow_orchid', '#forge:dyes/yellow', 'ecologics:surface_moss') // maybe dandelion? also TODO frog: add to yellow recipe
    // ditto lime
    // and green, maybe grass or fern?
    // i dont want pitcher plant bc tall and other reasons so cyan is out lol
    array('minecraft:blue_orchid', '#forge:dyes/light_blue', 'ecologics:surface_moss')
    array('minecraft:cornflower', '#forge:dyes/blue', 'ecologics:surface_moss')
    array('hexalia:lavender', '#forge:dyes/purple', 'ecologics:surface_moss')
    array('autumnity:autumn_crocus', '#forge:dyes/magenta', 'ecologics:surface_moss') // consider allium, azalea?
    array('hexalia:begonia', '#forge:dyes/pink', 'ecologics:surface_moss')

})