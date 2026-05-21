ServerEvents.recipes(event => {
    // event.remove({type: 'theurgy:calcination'})
    // unnecessary - all recipes nuked by nukelist

    function calcination(output, input_item, time) {

        if (time == undefined) {
            time = 200
        }

        event.custom({
            type: 'theurgy:calcination',
            ingredient: Ingredient.of(input_item).toJson(),
            result: Item.of(output).toJson(),
            time: time
        }).id(`kubejs:calcination/${output.path}_from_${input_item.path}`)

    }

    calcination('malum:alchemical_calx', 'kubejs:alchemical_paste', 100)

    malum_spirits.forEach(spirit => {
        event.custom({
            type: 'theurgy:calcination',
            ingredient: {
                tag: `kubejs:calcination/${spirit}`
            },
            result: { item: `kubejs:${spirit}_salt` },
            time: 200
        }).id(`kubejs:calcination/${spirit}_salt`)
    })

})