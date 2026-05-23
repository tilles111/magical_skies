ServerEvents.recipes(event => {

    function mortar(output, inputs, id) {

        if (id == undefined) {
            let id_part = inputs.map(input => Item.of(input).id.split(':')[1])
            id = `kubejs:mortar/${id_part.join('_and_')}_to_${Item.of(output).id.split(':')[1]}`
        } // this is kind of cinge
        event.custom({
            type: 'hexalia:mortar_and_pestle',
            ingredients: inputs.map(input => Ingredient.of(input).toJson()),
            output: Item.of(output).toJson()
        }).id(id)

    }

    function bulk_onetomany(output, input, id) {

        // idk if this is efficient lol
        for (let i = 1; i <= 3; i++) {
            mortar(
                Item.of(Item.of(output).id, Item.of(output).count * i),
                Array(i).fill(input),
                id
            )
        }

    }

    //Maybe a placeholder?
    bulk_onetomany('minecraft:gravel', 'minecraft:cobblestone')
    //Also maybe a placeholder?
    bulk_onetomany('minecraft:sand', 'minecraft:gravel')

    bulk_onetomany('forbidden_arcanus:arcane_crystal_dust', 'forbidden_arcanus:arcane_crystal')
    event.remove({id: 'eidolon:merammer_resin'})
    bulk_onetomany('eidolon:merammer_resin', 'eidolon:merammer_root')

    bulk_onetomany(Item.of('wizards_reborn:alchemy_calx', 2), 'malum:alchemical_calx')

    // Mushrooms!!!
    event.remove({id: '/wizards_reborn:mortar\/ground.*/'})
    bulk_onetomany('wizards_reborn:ground_brown_mushroom', 'minecraft:brown_mushroom')
    bulk_onetomany(Item.of('wizards_reborn:ground_brown_mushroom', 5), 'farmersdelight:brown_mushroom_colony')
    bulk_onetomany('wizards_reborn:ground_red_mushroom', 'minecraft:red_mushroom')
    bulk_onetomany(Item.of('wizards_reborn:ground_red_mushroom', 5), 'farmersdelight:red_mushroom_colony')
    bulk_onetomany('wizards_reborn:ground_crimson_fungus', 'minecraft:crimson_fungus')
    bulk_onetomany('wizards_reborn:ground_warped_fungus', 'minecraft:warped_fungus')
    bulk_onetomany('wizards_reborn:ground_mor', 'wizards_reborn:mor')
    bulk_onetomany(Item.of('wizards_reborn:ground_mor', 5), 'wizards_reborn:mor_colony')
    bulk_onetomany('wizards_reborn:ground_elder_mor', 'wizards_reborn:elder_mor')
    bulk_onetomany(Item.of('wizards_reborn:ground_elder_mor', 5), 'wizards_reborn:elder_mor_colony')
    // Mirecap, Dreamshroom, Glow shroom, Aura fungi? Sprouting fungus?

    // Petals
    event.remove({id: 'wizards_reborn:mortar/petals'})
    bulk_onetomany('wizards_reborn:petals', '#minecraft:small_flowers')
    bulk_onetomany(Item.of('wizards_reborn:petals', 2), '#minecraft:tall_flowers')

    dye_colors.forEach(dye_color => {

        bulk_onetomany(`minecraft:${dye_color}_dye`, `botania:${dye_color}_mushroom`)

    })
      
    // Arcane Ashes
    event.remove({id: 'bloodmagic:alchemytable/arcane_ash'})
    mortar(
        Item.of('bloodmagic:arcaneashes', '{Damage:12}'),
        [
            '#forge:dusts/arcane_crystal',
            '#forge:dusts/ash',
            '#forge:dusts/ash'
        ]
    )
    
    // Blends
    event.remove({id: 'eidolon:pewter_blend'})
    mortar(
        Item.of('eidolon:pewter_blend', 2),
        [
            '#forge:ingots/lead',
            '#forge:ingots/tin',
            '#forge:ingots/tin'
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

    // Reagents??
    event.remove({id: 'bloodmagic:alchemytable/reagent_water'})
    mortar(
        'bloodmagic:reagentwater',
        [
            'eidolon:enchanted_ash', // TODO frog: consider replacing with wizreborn calx
            'forbidden_arcanus:arcane_crystal_dust', // TODO frog: consider replacing with something else
            'theurgy:crystallized_water'
        ]
    )
    event.remove({id: 'bloodmagic:alchemytable/reagent_lava'})
    mortar(
        'bloodmagic:reagentlava',
        [
            'eidolon:enchanted_ash', // TODO frog: consider replacing with wizreborn calx
            'forbidden_arcanus:arcane_crystal_dust', // TODO frog: consider replacing with something else
            'theurgy:crystallized_lava'
        ]
    )
    event.remove({id: 'bloodmagic:alchemytable/reagent_growth'})
    mortar(
        'bloodmagic:reagentgrowth',
        [
            'eidolon:enchanted_ash', // TODO frog: consider replacing with wizreborn calx
            'forbidden_arcanus:arcane_crystal_dust', // TODO frog: consider replacing with something else
            'wizards_reborn:flower_fertilizer'
        ]
    )
    event.remove({id: 'bloodmagic:alchemytable/reagent_sight'})
    mortar(
        'bloodmagic:reagentsight',
        [
            'eidolon:enchanted_ash', // TODO frog: consider replacing with wizreborn calx
            'forbidden_arcanus:arcane_crystal_dust', // TODO frog: consider replacing with something else
            'occultism:otherworld_essence'
        ]
    )
})