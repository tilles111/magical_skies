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
                            'name:"Craft",' + 
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

    array(Item.of('kubejs:inert_slate', 2), 'minecraft:stone', '#forge:dusts/arcane_crystal')

    // Sigil Rebalancing
    event.remove({id: 'bloodmagic:array/growthsigil'})
    array('bloodmagic:growthsigil', 'bloodmagic:reagentgrowth', 'bloodmagic:blankslate', 'growthsigil')

    // Flowers from moss and dye
    array('minecraft:lily_of_the_valley', 'ecologics:surface_moss', '#forge:dyes/white')
    array('minecraft:oxeye_daisy', 'ecologics:surface_moss', '#forge:dyes/light_gray')
    // idk about gray lol, no flowers curretnly craft into it
    array('hexalia:nightshade_bush', 'ecologics:surface_moss', '#forge:dyes/black')
    // ditto brown
    array('minecraft:poppy', 'ecologics:surface_moss', '#forge:dyes/red')
    array('hexalia:dahlia', 'ecologics:surface_moss', '#forge:dyes/orange')
    array('forbidden_arcanus:yellow_orchid', 'ecologics:surface_moss', '#forge:dyes/yellow') // maybe dandelion? also TODO frog: add to yellow recipe
    // ditto lime
    // and green, maybe grass or fern?
    // i dont want pitcher plant bc tall and other reasons so cyan is out lol
    array('minecraft:blue_orchid', 'ecologics:surface_moss', '#forge:dyes/light_blue')
    array('minecraft:cornflower', 'ecologics:surface_moss', '#forge:dyes/blue')
    array('hexalia:lavender', 'ecologics:surface_moss', '#forge:dyes/purple')
    array('autumnity:autumn_crocus', 'ecologics:surface_moss', '#forge:dyes/magenta') // consider allium, azalea?
    array('hexalia:begonia', 'ecologics:surface_moss', '#forge:dyes/pink')

})