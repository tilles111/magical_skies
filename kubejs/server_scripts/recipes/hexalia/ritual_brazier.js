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
    
    ritual_brazier('supplementaries:wild_flax', 'supplementaries:flax_block')
    ritual_brazier('farmersdelight:wild_cabbages', '#forge:storage_blocks/cabbage')
    ritual_brazier('farmersdelight:wild_onions', '#forge:storage_blocks/onion')
    ritual_brazier('farmersdelight:wild_tomatoes', '#forge:storage_blocks/tomato')
    ritual_brazier('farmersdelight:wild_carrots', '#forge:storage_blocks/carrot')
    ritual_brazier('farmersdelight:wild_potatoes', '#forge:storage_blocks/potato')
    ritual_brazier('farmersdelight:wild_beetroots', '#forge:storage_blocks/beetroot')
    ritual_brazier('farmersdelight:wild_rice', 'farmersdelight:rice_bale')

})