ServerEvents.recipes(event => {

    function mutation(output, input, id) {

        if (id == undefined) {
            id = `kubejs:mutation/${Item.of(output).id.split(':')[1]}_from_${Item.of(input).id.split(':')[1]}`
        }
        event.custom({
            type: 'hexalia:mutation',
            input: Ingredient.of(input).toJson(),
            output: Item.of(output).toJson()
        }).id(id)

    }

    mutation('eidolon:merammer_root', 'farmersdelight:wild_carrots')
    mutation('eidolon:oanna_bloom', 'farmersdelight:wild_onions')
    mutation('eidolon:avennian_sprig', 'farmersdelight:wild_cabbages')
    mutation('eidolon:sildrian_seed', 'supplementaries:wild_flax')
    mutation('hexalia:wild_mandrake', 'farmersdelight:wild_potatoes')
    mutation('hexalia:wild_sunfire_tomato', 'farmersdelight:wild_tomatoes')

    mutation('minecraft:carrot', 'botania:orange_mystical_flower') // TODO frog: lame, change

    mutation('botania:pure_daisy', 'minecraft:oxeye_daisy')

})