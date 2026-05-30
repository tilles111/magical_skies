ServerEvents.recipes(event => {

    // TODO frog: make this into a helper
    event.custom({
        type: 'botania:petal_apothecary',
        ingredients: [
            {
                item: 'eidolon:enchanted_ash'
            },
            {
                item: 'forbidden_arcanus:arcane_crystal_dust_speck'
            }
        ],
        output: {
            item: 'hexalia:celestial_bloom'
        },
        reagent: {
            tag: 'botania:seed_apothecary_reagent'
        }
    })

})