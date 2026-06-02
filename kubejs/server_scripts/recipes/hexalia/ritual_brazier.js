ServerEvents.recipes(event => {

    function ritual_brazier(output, input, id) {

        if (id == undefined) {
            id = `kubejs:ritual_brazier/${Item.of(output).id.split(':')[1]}_from_${Item.of(input).id.split(':')[1]}`
        }
        event.custom({
            type: 'hexalia:ritual_brazier',
            input: Ingredient.of(input).toJson(),
            output: Item.of(output).toJson()
        }).id(id)

    }
    
    ritual_brazier(Item.of('supplementaries:wild_flax', 2), 'supplementaries:flax_block')
    ritual_brazier(Item.of('farmersdelight:wild_cabbages', 2), '#forge:storage_blocks/cabbage')
    ritual_brazier(Item.of('farmersdelight:wild_onions', 2), '#forge:storage_blocks/onion')
    ritual_brazier(Item.of('farmersdelight:wild_tomatoes', 2), '#forge:storage_blocks/tomato')
    ritual_brazier(Item.of('farmersdelight:wild_carrots', 2), '#forge:storage_blocks/carrot')
    ritual_brazier(Item.of('farmersdelight:wild_potatoes', 2), '#forge:storage_blocks/potato')
    ritual_brazier(Item.of('farmersdelight:wild_beetroots', 2), '#forge:storage_blocks/beetroot')
    ritual_brazier(Item.of('farmersdelight:wild_rice', 2), 'farmersdelight:rice_bale')

})