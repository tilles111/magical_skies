ServerEvents.recipes(event => {

    function petal_apothecary(output, inputs, id, reagent) {

        if (reagent == undefined) {
            reagent = '#botania:seed_apothecary_reagent'
        }
        if (id == undefined) {
            let id_part = inputs.map(input => Item.of(input).id.split(':')[1])
            id = `kubejs:petal_apothecary/${id_part.join('_and_')}_to_${Item.of(output).id.split(':')[1]}`
        }
        event.custom({
            type: 'botania:petal_apothecary',
            ingredients: inputs.map(input => Ingredient.of(input).toJson()),
            output: Item.of(output).toJson(),
            reagent: Ingredient.of(reagent).toJson()
        }).id(id)

    }

    petal_apothecary('hexalia:celestial_bloom', [
        'eidolon:enchanted_ash',
        'forbidden_arcanus:arcane_crystal_dust_speck'
    ])

})