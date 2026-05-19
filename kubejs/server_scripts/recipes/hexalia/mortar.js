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
        Item.of('bloodmagic:arcaneashes', '{Damage:10}'),
        [
            '#forge:dusts/arcane_crystal',
            '#forge:dusts/ash',
            '#forge:dusts/ash'
        ]
    )
    
    mortar(
        '2x kubejs:bronze_blend',
        [
            '#forge:ingots/tin',
            '#forge:ingots/copper',
            '#forge:ingots/copper'
        ]
    )
    
    mortar(
        '2x eidolon:pewter_blend',
        [
            '#forge:ingots/lead',
            '#forge:ingots/tin',
            '#forge:ingots/tin'
        ]
    )

    // Reagents??

})