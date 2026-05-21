ServerEvents.recipes(event => {

    function dolium_standard(output, input_items, input_fluid, container, id) {

        var items_array = []

        input_items.forEach(starting_input_item => {

            var input_item
            if (Array.isArray(starting_input_item)) {
                if (starting_input_item[1]) {
                    // keep
                    input_item = [starting_input_item[0], 0]
                }
            } else {
                input_item = [starting_input_item, starting_input_item.count]
            }
            
            if (input_item[1] == null) {input_item[1] = 1}

            if (Ingredient.of(input_item[0]).isWildcard()) {
                items_array.push({
                    tag: Ingredient.of(input_item[0]).toJson(),
                    count: input_item[1]
                })
            } else {
                items_array.push({
                    item: Ingredient.of(input_item[0]).toJson(),
                    count: input_item[1]
                })
            }
        })

        // id defining
        var id_part = input_items.map(input_item => Item.of(input_item).id.split(':')[1])
        var id_full = `kubejs:dolium/${id_part.join('_and_')}_in_${Fluid.of(input_fluid).id.split(':')[1]}_to_${Item.of(output).id.split(':')[1]}`

        var output_obj = {
            type: 'forge:nbt',
            count: Item.of(output).count,
            item: Item.of(output).id,
        }

        if (!(Item.of(output).nbt == undefined)) {
            output_obj.nbt = Item.of(output).nbtString
        }


        var recipe = {
            type: 'caupona:dolium',
            density: 0.0,
            keepInfo: false,
            items: items_array,
            fluid: Fluid.of(input_fluid).id,
            amount: Fluid.of(input_fluid).amount,
            output: output_obj
        }

        if (container == undefined) {
            if (id == undefined) {
                id = id_full
            }
        } else {
            if (id == undefined) {
                id = `${id_full}_in_${Item.of(container).id.split(':')[1]}`
            }
            recipe.container = Ingredient.of(container).toJson()
        }

        event.custom(recipe).id(id)
    }

    // This took a million years but the recipes should be easier to type now
    // if you want to keep an ingredient just replace its input 'namespace:path' with ['namespace:path', true]

    // Crystallizing
    dolium_standard('theurgy:sal_ammoniac_crystal',
        [
            'forbidden_arcanus:arcane_crystal_dust_speck'
        ],
        'theurgy:sal_ammoniac',
        'wizards_reborn:alchemy_calx'
    )
    dolium_standard('theurgy:crystallized_water',
        [
            'forbidden_arcanus:arcane_crystal_dust_speck'
        ],
        'minecraft:water',
        'wizards_reborn:alchemy_calx'
    )
    dolium_standard('theurgy:crystallized_lava',
        [
            'forbidden_arcanus:arcane_crystal_dust_speck'
        ],
        'minecraft:lava',
        'wizards_reborn:alchemy_calx'
    )

    dolium_standard('artifacts:crystal_heart',
        [
            'forbidden_arcanus:arcane_crystal_dust'
        ],
        'bloodmagic:life_essence_fluid',
        'wizards_reborn:enchanted_calx'
    )



    dolium_standard(Item.of('kubejs:tin_nugget', 18), 
        [
            Ingredient.of('theurgy:alchemical_sulfur_tin', 2),
            'kubejs:earthen_salt'
        ],
        Fluid.of('wizards_reborn:alchemy_oil', 250)
    )
    dolium_standard(Item.of('eidolon:lead_nugget', 18), 
        [
            Ingredient.of('theurgy:alchemical_sulfur_lead', 2),
            'kubejs:earthen_salt'
        ],
        Fluid.of('wizards_reborn:alchemy_oil', 250)
    )
    dolium_standard(Item.of('malum:copper_nugget', 18), 
        [
            Ingredient.of('theurgy:alchemical_sulfur_copper', 2),
            'kubejs:earthen_salt'
        ],
        Fluid.of('wizards_reborn:alchemy_oil', 250)
    )
    
    dolium_standard(Item.of('wizards_reborn:arcane_linen_seeds', 18), 
        [
            'minecraft:wheat_seeds'
        ],
        Fluid.of('kubejs:sourceberry_stew', 500)
    )
    
    dolium_standard(Item.of('eidolon:lead_nugget', 9), 
        [
            Ingredient.of('minecraft:gravel', 3)
        ],
        Fluid.of('kubejs:sourceberry_stew', 500)
    )
    
    dolium_standard(Item.of('kubejs:alchemical_paste', 2), 
        [
            Ingredient.of('minecraft:clay_ball', 2),
            'eidolon:enchanted_ash'
        ],
        Fluid.of('wizards_reborn:alchemy_oil', 250)
    ) // Frog please mess with this, it kinda sucks
})