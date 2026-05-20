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

    dolium_standard('theurgy:sal_ammoniac_crystal',
        [
            'forbidden_arcanus:arcane_crystal_dust_speck'
        ],
        'theurgy:sal_ammoniac'
    ) // maybe make the dust speck the container?
    dolium_standard(Item.of('kubejs:tin_nugget', 18), 
        [
            Ingredient.of('theurgy:alchemical_sulfur_tin', 2),
            'forbidden_arcanus:arcane_crystal_dust_speck'
        ],
        Fluid.of('wizards_reborn:alchemy_oil', 250)
    )

    event.custom({
        type: "caupona:dolium",
        density: 0.0,
        items: [
            {
                count: 2,
                item : {
                    item: 'theurgy:alchemical_sulfur_lead'
                }
            },
            {
                item : {
                    item: 'forbidden_arcanus:arcane_crystal_dust_speck'
                }
            }
        ],
        fluid: "wizards_reborn:alchemy_oil",
        amount: 250,
        keepInfo: false,
        output: {
            type: "forge:nbt",
            count: 18,
            item: "eidolon:lead_nugget"
        }
    }).id('kubejs:dolium/sulfur_solidification/lead')
    event.custom({
        type: "caupona:dolium",
        density: 0.0,
        items: [
            {
                count: 2,
                item : {
                    item: 'theurgy:alchemical_sulfur_copper'
                }
            },
            {
                item : {
                    item: 'forbidden_arcanus:arcane_crystal_dust_speck'
                }
            }
        ],
        fluid: "wizards_reborn:alchemy_oil",
        amount: 250,
        keepInfo: false,
        output: {
            type: "forge:nbt",
            count: 18,
            item: "malum:copper_nugget"
        }
    }).id('kubejs:dolium/sulfur_solidification/copper')
    
    event.custom({
        type: "caupona:dolium",
        density: 0.0,
        items: [
            {
                item : {
                    item: 'minecraft:wheat_seeds'
                }
            }
        ],
        fluid: "kubejs:sourceberry_stew",
        amount: 500,
        keepInfo: false,
        output: {
            type: "forge:nbt",
            count: 1,
            item: "wizards_reborn:arcane_linen_seeds"
        }
    }).id('kubejs:dolium/arcane_linen')

    event.custom({
        type: "caupona:dolium",
        density: 0.0,
        items: [
            {
                count: 3,
                item : {
                    item: 'minecraft:gravel'
                }
            }
        ],
        fluid: "kubejs:sourceberry_stew",
        amount: 500,
        keepInfo: false,
        output: {
            type: "forge:nbt",
            count: 9,
            item: "eidolon:lead_nugget"
        }
    }).id('kubejs:dolium/lead_leeching')
})