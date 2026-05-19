ServerEvents.recipes(event => {

    function mortar(output, inputs, id) {

        if (id == undefined) {
            let id_part = inputs.map(input => input.path)
            id = `kubejs:mortar/${id_part.join('_and_')}_to_${Item.of(output).id.split(':')[1]}`
        } // this is kind of cinge
        event.custom({
            type: 'hexalia:mortar_and_pestle',
            ingredients: inputs.map(input => Ingredient.of(input).toJson()),
            output: Item.of(output).toJson()
        }).id(id)

    }

    function bulk_1to1(output, input, id) {

        // idk if this is efficient lol
        for (let i = 1; i <= 3; i++) {
            mortar(
                Item.of(output, i),
                Array(i).fill(input),
                id
            )
        }

    }

    //Maybe a placeholder?
    bulk_1to1('minecraft:gravel', 'minecraft:cobblestone')
    //Also maybe a placeholder?
    bulk_1to1('minecraft:sand', 'minecraft:gravel')

    bulk_1to1('forbidden_arcanus:arcane_crystal_dust', 'forbidden_arcanus:arcane_crystal')    

    // Arcane Ashes
    mortar(
        Item.of('bloodmagic:arcaneashes', '{Damage:12}'),
        [
            '#forge:dusts/arcane_crystal',
            '#forge:dusts/ash',
            '#forge:dusts/ash'
        ]
    )
    
    mortar(
        Item.of('kubejs:bronze_blend', 2),
        [
            '#forge:ingots/tin',
            '#forge:ingots/copper',
            '#forge:ingots/copper'
        ]
    )
    
    mortar(
        Item.of('eidolon:pewter_blend', 2),
        [
            '#forge:ingots/lead',
            '#forge:ingots/tin',
            '#forge:ingots/tin'
        ]
    )

    // Reagents??
    mortar(
        'bloodmagic:reagentwater',
        [
            'eidolon:enchanted_ash', // TODO frog: consider replacing with wizreborn calx
            'forbidden_arcanus:arcane_crystal_dust', // TODO frog: consider replacing with something else
            'theurgy:crystallized_water'
        ]
    )

    mortar(
        'bloodmagic:reagentlava',
        [
            'eidolon:enchanted_ash', // TODO frog: consider replacing with wizreborn calx
            'forbidden_arcanus:arcane_crystal_dust', // TODO frog: consider replacing with something else
            'theurgy:crystallized_lava'
        ]
    )

    mortar(
        'bloodmagic:reagentgrowth',
        [
            'eidolon:enchanted_ash', // TODO frog: consider replacing with wizreborn calx
            'forbidden_arcanus:arcane_crystal_dust', // TODO frog: consider replacing with something else
            'wizards_reborn:flower_fertilizer'
        ]
    )

    mortar(
        'bloodmagic:reagentsight',
        [
            'eidolon:enchanted_ash', // TODO frog: consider replacing with wizreborn calx
            'forbidden_arcanus:arcane_crystal_dust', // TODO frog: consider replacing with something else
            'occultism:otherworld_essence'
        ]
    )

})