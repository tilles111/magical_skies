ServerEvents.recipes(event => {

    function pure_daisy(output, input, time) {

        if (time == undefined) {
            time = 150
        }

        let recipe = {
            type: 'botania:pure_daisy',
            output: {
                name: output
            },
            time: time
        }

        if (input.startsWith('#')) {
            recipe.input = {
                type: 'tag',
                tag: input.substring(1)
            }
        } else {
            recipe.input = {
                type: 'block',
                block: input
            }
        }

        event.custom(recipe)

    }

    pure_daisy('embers:raw_caminite_block', 'twigs:silt', 10)

})