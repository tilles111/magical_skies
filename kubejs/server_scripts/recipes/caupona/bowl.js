ServerEvents.recipes(event => {

    function bowl(item, fluid, id) {

        if (id == undefined) {
            id = `kubejs:bowl/${Item.of(item).id.split(':')[1]}_to_${Fluid.of(fluid).id.split(':')[1]}`
        } 

        event.custom({
            type: 'caupona:bowl',
            fluid: Fluid.of(fluid).id,
            item: Item.of(item).id
        }).id(id)
    }

    bowl('kubejs:sourceberry_stew', 'kubejs:sourceberry_stew')
})