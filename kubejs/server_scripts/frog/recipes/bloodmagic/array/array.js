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

    array( // TODO: frog consider finding out how to make this shorter or something
        Item.of('ars_elemental:manipulation_caster_tome', '{RepairCost:0,"ars_nouveau:caster":{current_slot:0,flavor:"",hidden_recipe:"",is_hidden:0b,spell_count:1,spells:{spell0:{name:"Craft",recipe:{part0:"ars_nouveau:glyph_self",part1:"ars_nouveau:glyph_craft",size:2},sound:{pitch:1.0f,soundTag:{id:"ars_nouveau:fire_family"},volume:1.0f},spellColor:{b:255,g:137,r:1,type:"ars_nouveau:rainbow"}}}},display:{Name:\'{"text":"Crafting Table of Contents"}\'}}'),
        'minecraft:book',
        'minecraft:crafting_table'
    )

})